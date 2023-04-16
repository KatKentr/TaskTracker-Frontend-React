import './TodoApp.css'
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from './ErrorComponent';
import ListTodosComponent from './ListTodosComponent';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogOutComponent';
import ToDoComponent from './ToDoComponent'
import AuthProvider, { useAuth } from './security/AuthContext';




function AuthenticatedRoute({children}) {  //the child components are visible only if someone is authenticated
    const authContext=useAuth()
    if (authContext.isAuthenticated)
        return children

    return <Navigate to="/"   />    //if the user is not authenticated and attempts to access a page we return them to the login page  
}

//the container for all the components that will be created
export default function TodoApp(){

    return (
        <div className="TodoApp">   {/*our page will be a combination of three components: Header Component, a component selected based on the route and the footer component*/}
             <AuthProvider>           {/*all components are children of the AuthProvider */}
                <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent />} />     {/*! these routes will take you to the page irrespective of whether you are logged in or not.  need an authenticated route */}
                    <Route path='/login' element={<LoginComponent />} />

                    <Route path='/welcome/:username' element={
                    <AuthenticatedRoute>
                            <WelcomeComponent />
                    </AuthenticatedRoute>
                    } />
                    <Route path='/todos' element={
                    <AuthenticatedRoute>
                            <ListTodosComponent />
                    </AuthenticatedRoute>
                    } />
                    <Route path='/todos/:id' element={
                    <AuthenticatedRoute>
                            <ToDoComponent />
                    </AuthenticatedRoute>
                    } />
                    <Route path='/logout' element={
                        <AuthenticatedRoute>
                            <LogoutComponent />
                        </AuthenticatedRoute>
                   } />
                   <Route path='*' element={<ErrorComponent />} />   {/*error page is shown to the user for a not defined path */}
                </Routes>
                <FooterComponent />
                </BrowserRouter> 
            </AuthProvider>
               
        </div>
    )


}


