import { useEffect } from "react"
import { retrieveAllToDosForUsername } from "./api/TodoApiService"
import { useState } from "react"



function ListTodosComponent() {

    const today = new Date()
    
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const [todos,setTodos] = useState([])   //we need state to display data. initially an empty todo list. To display data we need to change the state

    // const todos = [
    //     // {id: 1, description: 'Learn AWS', done: false, targetDate:targetDate},
    //     // {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate:targetDate},
    //     // {id: 3, description: 'Learn DevOps', done: false, targetDate:targetDate},
    // ]

//useEffect: tell React that your component needs to do something after render
useEffect (               //we want to load data as soon as the component is ready(as soon as the empty todo is rendered). Then we want to display the data (we should change the state)
    () => refreshTodos (), []
)


function refreshTodos (){

    retrieveAllToDosForUsername('Katerina')   //invoke function that invokes a call to a rest api
               .then( (response) => 
               {
                //console.log(response.data)
                setTodos(response.data)   //once the data is loaded, we display them by changing the state

               } )
            //    .catch ( (error) => errorResponse(error) )
            //    .finally ( () => console.log('cleanup') )

}
    

    return (
        
        <div className="container">

           <h1>Things you want to do! </h1>
        
        <div>
            <table className="table">
               <thead>
                <tr>
                    <td>Id</td>
                    <td>Description</td>
                    <td>Is Done?</td>
                    <td>Target Date</td>
        
                </tr>
               </thead>
               <tbody>
               {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        )
                    }
               </tbody>

            </table>
        </div>
        </div>
    )

}



export default ListTodosComponent;