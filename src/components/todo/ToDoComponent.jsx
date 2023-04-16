import {useParams} from 'react-router-dom'
import { useAuth } from './security/AuthContext'
import { useEffect } from 'react'
import { retrieveToDoApi } from './api/TodoApiService'
import { useState } from 'react'

export default function ToDoComponent(){


    const {id } =useParams()
    const authContext= useAuth()
    const username= authContext.username

    //we want to allow editing of description and the target date, so we need state variables for both.

    const[description,setDescription] = useState('')

    useEffect(
        () => retrieveToDos(),[id]
    )


    function retrieveToDos(){

        retrieveToDoApi(username,id)
        .then(response => {
            setDescription(response.data.description)
        })
            
        .catch(error=> console.log(error))      
        



        

    }


    return (
        <div className="container">

            <h1>Enter Todo Details</h1>
            <div>
                description: {description}
            </div>
        </div>
    )


}