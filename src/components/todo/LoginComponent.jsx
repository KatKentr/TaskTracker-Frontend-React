import { useState } from "react";


function LoginComponent() {

    // will return an array of two elements. when we invoke the value setUsername, we update the value stored in state
    const [username, setUsername]= useState('Katerina')

    function handleUsernameChange(event){
        //console.log(event.target.value);
        setUsername(event.target.value);  //update the state
    }

    return (
        <div className="Login">
            Login Component
            {/* username password button */}
            <div className="LoginForm">

            <div>
                    <label>User Name:</label>
                    {/* The value of the form element is stored in react state.In addition thi value is stored in the DOM element. These two need to be syncronized = Controlled component */}
                    <input type="text" value={username} name="username" onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <button type="button" name="login" >login</button>
                </div>

            </div>
        </div>
    )
}

export default LoginComponent;