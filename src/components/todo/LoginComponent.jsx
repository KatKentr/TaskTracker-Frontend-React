import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";


function LoginComponent() {

    // will return an array of two elements. when we invoke the value setUsername, we update the value stored in state
    const [username, setUsername]= useState('Katerina')
    const [password, setPassword]= useState('')
    const [showErrorMessage, setShowErrorMessage]= useState(false)
    const navigate=useNavigate();

    const authContext=useAuth()


    function handleUsernameChange(event){
        //console.log(event.target.value);
        setUsername(event.target.value);  //update the state
    }

    function handlePasswordChange(event){
        //console.log(event.target.value);
        setPassword(event.target.value);  //update the state
    }

    async function handleSubmit(event){

        if (await authContext.login(username,password)){   //we invoke the method for the authentication
           
            navigate(`/welcome/${username}`)   //we want to navigate to welcome page only if login finishes execution
            
        } else {
            setShowErrorMessage(true)

        }
    }


    return (
        <div className="Login">
            {/* if the value of the variable is true we show the correponding message */}
            
            {showErrorMessage &&  <div className="errorMessage">Authentication failed. Please check your credentials.</div>}
            {/* username password button */}
            <div className="LoginForm">

            <div>
                    <label>User Name:</label>
                    {/* The value of the form element is stored in react state.In addition thi value is stored in the DOM element. These two need to be syncronized = Controlled component */}
                    <input type="text" value={username} name="username" onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} name="password" onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>

            </div>
        </div>
    )
}




export default LoginComponent;