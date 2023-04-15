
import {useParams,Link} from 'react-router-dom'
import { useState } from 'react'
import {  retrieveHelloWorldPathParameter } from './api/HelloWorldApiService'


//function WelcomeComponent() {

    // const {username  } =useParams()

    // return (
        
    //     <div className="WelcomeComponent">

    //        <h1>Welcome {username}</h1>
    //        <div>
    //         {/* add a link from the welcome component to the todos component */}
    //           Manage your todos <Link to="/todos">Go here</Link>
    //        </div>
    //     </div>

    // )

    function WelcomeComponent() {

        const {username } = useParams()
    
        const [message, setMessage] = useState(null) //the initial message will be null
    
        function callHelloWorldRestApi(){
            console.log('called')
            retrieveHelloWorldPathParameter('Katerina')  
                .then( (response) => successfulResponse(response) )
                .catch ( (error) => errorResponse(error) )
                .finally ( () => console.log('cleanup') )
             
    
        }
    
        function successfulResponse(response) {
            console.log(response)
            setMessage(response.data.message)
            //setMessage(response.data.message)
        }
    
        function errorResponse(error) {
            console.log(error)
        }
    
        return (
        <div>
            <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
            Call Hello World</button>
        
        <div className="text-info">{message}</div>
        </div>
        );
        
       

}



export default WelcomeComponent;