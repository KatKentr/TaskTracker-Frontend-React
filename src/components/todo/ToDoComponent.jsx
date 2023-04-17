import { useParams } from 'react-router-dom'
import { useAuth } from './security/AuthContext'
import { useEffect } from 'react'
import { retrieveToDoApi } from './api/TodoApiService'
import { useState } from 'react'
import { Formik, Form, Field,ErrorMessage } from 'formik'

export default function ToDoComponent() {


    const { id } = useParams()
    const authContext = useAuth()
    const username = authContext.username

    //we want to allow editing of description and the target date, so we need state variables for both.

    const [description, setDescription] = useState('')
    const [targetDate,setTargetDate]=useState('')

    useEffect(   //when the component is loaded we invoke the function to load the details of the selected todo
        () => retrieveToDos(), [id]
    )


    function retrieveToDos() {

        retrieveToDoApi(username, id)
            .then(response => {
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
            })

            .catch(error => console.log(error))

    }


    function onSubmit(values){
        console.log(values)

    }


    return (
        <div className="container">

            <h1>Enter Todo Details</h1>
            <div>
                description: {description}
                <Formik initialValues={ { description, targetDate } } 
                  enableReinitialize = {true}
                    onSubmit = {onSubmit}>
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