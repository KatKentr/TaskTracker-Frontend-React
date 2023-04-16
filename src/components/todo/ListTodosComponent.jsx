import { useEffect } from "react"
import { retrieveAllToDosForUsernameApi,deleteToDoApi } from "./api/TodoApiService"
import { useState } from "react"



function ListTodosComponent() {

    const today = new Date()
    
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const [todos,setTodos] = useState([])   //we need state to display data. initially an empty todo list. To display data we need to change the state

    const [message,setMessage]=useState(null)

    // const todos = [
    //     // {id: 1, description: 'Learn AWS', done: false, targetDate:targetDate},
    //     // {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate:targetDate},
    //     // {id: 3, description: 'Learn DevOps', done: false, targetDate:targetDate},
    // ]

//useEffect: tell React that your component needs to do something after render. Invocation of the method refreshTodos()
useEffect (               //we want to load data as soon as the component is ready(as soon as the empty todo is rendered). Then we want to display the data (we should change the state)
    () => refreshTodos (), []
)


function refreshTodos (){

    retrieveAllToDosForUsernameApi('Katerina')   //invoke function that invokes a call to a rest api
               .then( (response) => 
               {
                //console.log(response.data)
                setTodos(response.data)   //once the data is loaded, we display them by changing the state

               } )
               .catch ( (error) =>console.log(error))
            //    .finally ( () => console.log('cleanup') )

}


function deleteToDo(id){
    deleteToDoApi('Katerina',id)   //invoke the function that invokes a call to the rest api
    .then(

        () => {
            
            setMessage(`Delete todo with id ${id} succesfull`)//to display a message we need a state
            refreshTodos()
        }

    )
    .catch((error) =>console.log(error))

    
}
    

    return (
        
        <div className="container">

           <h1>Things you want to do! </h1>
           {/* we display the messge only if it is not null */}
           {message && <div className="alert alert-warning">{message}</div>}
        
        <div>
            <table className="table">
               <thead>
                <tr>
                    <th>Description</th>
                    <th>Is Done?</th>
                    <th>Target Date</th>
                    <th>Delete</th>
        
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
                                     <td><button className="btn btn-warning" onClick={()=>deleteToDo(todo.id)}>Delete</button></td>  {/*when the function has arguments, we need to use an arrow function */}
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