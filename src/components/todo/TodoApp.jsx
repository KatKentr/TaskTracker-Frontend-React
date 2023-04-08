import './TodoApp.css'
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from './ErrorComponent';
import ListTodosComponent from './ListTodosComponent';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogOutComponent';

//the container for all the components that will be created
export default function TodoApp(){

    return (
        <div className="TodoApp">   {/*our page will be a combination of three components: Header Component, a component selected based on the route and the footer component*/}
            <HeaderComponent />
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginComponent />} />
                <Route path='/login' element={<LoginComponent />} />
                <Route path='/welcome/:username' element={<WelcomeComponent />} />
                <Route path='/todos' element={<ListTodosComponent />} />
                <Route path='/logout' element={<LogoutComponent />} />
                <Route path='*' element={<ErrorComponent />} />   {/*error page is shown to the user for a not defined path */}
            </Routes>
            
            </BrowserRouter> 
            <FooterComponent />
               
        </div>
    )


}


