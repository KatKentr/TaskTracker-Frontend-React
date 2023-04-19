import { createContext, useContext, useState } from "react";
import {executeBasicAuthenticationService} from "../api/TodoApiService"

//We will create an authentication context, put some state in the context and share the created content with other components 
export const AuthContext = createContext()  //provide access to the AuthContext to the other components, in order to be able to ue the number variable in another component

export const useAuth = () => useContext(AuthContext)  //we create a hook, so that components can acess the values in the authentication context

//we create the functional component AuthProvider to provide the context to other components
export default function AuthProvider({children}) {   //all the children under the AuthProvider ill be assigned under the variable children

    //we put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)  //we want to make this value available to other components
    const[username,setUsername] =useState(null)


    //authentication logic
    // function login(username,password){   //hardcoded

    //     if (username==='Katerina' && password==='dummy'){
    //         setAuthenticated(true)    //when the uer logs in we set setAuthenticated to true and setUsername
    //         setUsername(username)
    //         return true           
    //     } else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }

    // }

    function login(username,password){     
        //window.btoa : we do base64 encoding
        const baToken='Basic ' + window.btoa(username + ":" + password)    //this is how we can generate the token
        
        executeBasicAuthenticationService(baToken)          //for now we have set basic authentication in backend. username and password are defined in the application.properties file in the spring boot project
        .then (response => console.log(response))
        .catch(error => console.log(error))

        setAuthenticated(false)              //this will get executed before the above block. The above block will get executed once we get the response back
                                             //However in this method we want to stop execution until we get a respnse back. If we get a response back we want to send the true back, so we will make this method an async method


        // if (username==='Katerina' && password==='dummy'){
        //     setAuthenticated(true)    //when the uer logs in we set setAuthenticated to true and setUsername
        //     setUsername(username)
        //     return true           
        // } else {
        //     setAuthenticated(false)
        //     setUsername(null)
        //     return false
        // }

    }



    function logout(){

        setAuthenticated(false)
    }



    return (

         <AuthContext.Provider value= {{isAuthenticated,login,logout,username}}>   {/* we create an object, These values will be shared among the child components*/}
            {children}   {/*the context will be shared ith children(components) of the AuthProvider */}
        </AuthContext.Provider>

    )


}
