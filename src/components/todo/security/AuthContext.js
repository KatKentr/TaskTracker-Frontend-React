import { createContext, useContext, useState } from "react";

//We will create an authentication context, put some state in the context and share the created content with other components 
export const AuthContext = createContext()  //provide access to the AuthContext to the other components, in order to be able to ue the number variable in another component

export const useAuth = () => useContext(AuthContext)  //we create a hook, so that components can acess the values in the authentication context

//we create the functional component AuthProvider to provide the context to other components
export default function AuthProvider({children}) {   //all the children under the AuthProvider ill be assigned under the variable children


    const [isAuthenticated, setAuthenticated] = useState(false)  //we want to make this value available to other components, we put it inside the valueToBeShared


    //authentication logic
    function login(username,password){

        if (username==='Katerina' && password==='dummy'){
            setAuthenticated(true)    //when the uer logs in we set setAuthenticated to true
            return true           
        } else {
            setAuthenticated(false)
            return false
        }

    }


    function logout(){

        setAuthenticated(false)
    }



    return (

         <AuthContext.Provider value= {{isAuthenticated,login,logout}}>   {/* we create an object, These values will be shared among the child components*/}
            {children}   {/*the context will be shared ith children(components) of the AuthProvider */}
        </AuthContext.Provider>

    )


}
