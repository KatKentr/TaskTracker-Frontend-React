import { createContext, useContext, useState } from "react";
import {executeBasicAuthenticationService, executeJWTAuthenticationService} from "../api/AuthenticationApiService"
import { apiClient } from "../api/ApiClient";

//We will create an authentication context, put some state in the context and share the created content with other components 
export const AuthContext = createContext()  //provide access to the AuthContext to the other components, in order to be able to ue the number variable in another component

export const useAuth = () => useContext(AuthContext)  //we create a hook, so that components can acess the values in the authentication context

//we create the functional component AuthProvider to provide the context to other components
export default function AuthProvider({children}) {   //all the children under the AuthProvider ill be assigned under the variable children

    //we put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)  //we want to make this value available to other components
    const[username,setUsername] =useState(null)

    const [token,setToken]=useState(null)


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

    //login using basic auth service
    // async function login(username,password){     //However in this method we want to stop execution until we get a respnse back. If we get a response back we want to send the true back, so we will make this method an async method
    //     //window.btoa : we do base64 encoding
    //     const baToken='Basic ' + window.btoa(username + ":" + password)    //this is how we can generate the token
        
    //     try {

    //         const response= await executeBasicAuthenticationService(baToken)          //for now we have set basic authentication in backend. username and password are defined in the application.properties file in the spring boot project
                                                   
    //         if (response.status==200){
    //             setAuthenticated(true)    //when the uer logs in we set setAuthenticated to true and setUsername
    //             setUsername(username)
    //             setToken(baToken)       //we also need to set the token into the context

    //             apiClient.interceptors.request.use(    //for any api calls we add this token to the header.we set a common token to the api client
    //                     (config)   => {console.log('intercepting and adding a token')
    //                     config.headers.Authorization= baToken      //we add an authorization header to each of the api calls
    //                     return config
    //                 }
    //             )                        

    //             return true           
    //         } else {
    //             logout()
    //             return false
    //         }

    //     } catch(error){ //in case of any error in executing the method we get false back

    //         logout()
    //         return false

    //     }
    // }

    //login using jwt auth service
    async function login(username,password){     //However in this method we want to stop execution until we get a respnse back. If we get a response back we want to send the true back, so we will make this method an async method
       
        
        try {

            const response= await executeJWTAuthenticationService(username,password)          //for now we have set basic authentication in backend. username and password are defined in the application.properties file in the spring boot project
                                                   
            if (response.status==200){
                const jwtToken = 'Bearer ' + response.data.token    //retrieve token from the response
                setAuthenticated(true)    //when the uer logs in we set setAuthenticated to true and setUsername
                setUsername(username)
                setToken(jwtToken)       //we also need to set the token into the context

                apiClient.interceptors.request.use(    //for any api calls we add this token to the header.we set a common token to the api client
                        (config)   => {console.log('intercepting and adding a token')
                        config.headers.Authorization= jwtToken      //we add an authorization header to each of the api calls
                        return config
                    }
                )                        

                return true           
            } else {
                logout()
                return false
            }

        } catch(error){ //in case of any error in executing the method we get false back

            logout()
            return false

        }
    }



    function logout(){

        setAuthenticated(false)
        setToken(null)
        setUsername(null)

    }



    return (

         <AuthContext.Provider value= {{isAuthenticated,login,logout,username,token}}>   {/* we create an object, These values will be shared among the child components*/}
            {children}   {/*the context will be shared ith children(components) of the AuthProvider */}
        </AuthContext.Provider>

    )


}
