import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from './security/AuthContext'
import { useEffect } from 'react'
import { retrieveToDoApi, updateToDoApi,createToDoApi } from './api/TodoApiService'
import { useState } from 'react'
import { Formik, Form, Field,ErrorMessage } from 'formik'
import moment from 'moment'

export default function ToDoComponent() {


    const { id } = useParams()
    const authContext = useAuth()
    const username = authContext.username

    //we want to allow editing of description and the target date, so we need state variables for both.

    const [description, setDescription] = useState('')   //the initial values are empty strings
    const [targetDate,setTargetDate]=useState('')

    const navigate=useNavigate()

    useEffect(   //when the component is loaded we invoke the function to load the details of the selected todo. In case of id==1 (we add a new todo) empty field are shown
        () => retrieveToDos(), [id]     
    )


    function retrieveToDos() {

        if (id!=-1) {  //we load the todo details only if the id is not -1. (Only if the todo already exists and not in the case that a new todo is being added)

            retrieveToDoApi(username, id)
            .then(response => {
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
            })

            .catch(error => console.log(error))
        }
        

    }

   
    function onSubmit(values){    //when the user clicks the save button
        console.log(values)
        const todo= {id: id,username:username,description:values.description,targetDate:values.targetDate,done:false}
        //console.log(todo)

        if (id ==-1){   //in case a new todo is being added

            createToDoApi(username,todo)   //make a call to create a new todo. Save the new todo
            .then(response => {
                //console.log(response)
                navigate('/todos')
            })
    
            .catch(error => console.log(error))

        } else {

            updateToDoApi(username,id,todo)   //make a call to the updatetoApi, if it is succesfull the todo is updated
        .then(response => {
            //console.log(response)
            navigate('/todos')
        })
        .catch(error => console.log(error))

        }

    }

    function validate(values){    //validate the description and the target data that the user attempts to submit
        //console.log(values)
        let errors={}

        if (values.description.length<5){
            errors.description='Enter a valid description'
        }

        if (values.targetDate == null  || values.targetDate=='' || !moment(values.targetDate).isValid()){
            errors.targetDate='Enter a target date'
        }
               
        return errors

    }


    return (
        <div className="container">

            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={ { description, targetDate } } 
                  enableReinitialize = {true}
                    onSubmit = {onSubmit}    //when the user clicks the save button
                    validate={validate}
                    validateOnChange={false}    //I want to validate users input only when i click save
                    validateOnBlur={false}>
                    {
                        (props) => (

                            <div>
                                <Form>
                                    <ErrorMessage
                                        name="description"
                                        component="div"
                                        className="alert alert-warning"
                                    />

                                    <ErrorMessage
                                        name="targetDate"
                                        component="div"
                                        className="alert alert-warning"
                                    />

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field type="text" className="form-control" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field type="date" className="form-control" name="targetDate" />
                                    </fieldset>
                                    <div>
                                        <button className="btn btn-success m-5" type="submit">Save</button>
                                    </div>

                                </Form>

                            </div>
                        )

                    }

                </Formik>
            </div>
        </div>
    )


}