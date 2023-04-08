import { createContext, useContext, useState } from "react";

//We will create an authentication context, put some state in the context and share the created content with other components 
export const AuthContext = createContext()  //provide access to the AuthContext to the other components, in order to be able to ue the number variable in another component

export const useAuth = () => useContext(AuthContext)  //we create a hook, so that components can acess the values in the authentication context

//we create the functional component AuthProvider to provide the context to other components
export default function AuthProvider({children}) {   //all the children under the AuthProvider ill be assigned under the variable children


    //put some state in the context
    const [number,setNumber] = useState(0)

    return (

        <AuthContext.Provider value= {{number}}>
            {children}   {/*the context will be shared ith children(components) of the AuthProvider */}
        </AuthContext.Provider>

    )


}
