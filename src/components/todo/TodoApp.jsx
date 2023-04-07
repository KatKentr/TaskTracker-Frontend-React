import './TodoApp.css'
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from './ErrorComponent';
import ListTodosComponent from './ListTodosComponent';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//the container for all the components that will be created
export default function TodoApp(){

    return (
        <div className="TodoApp">
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginComponent />} />
                <Route path='/login' element={<LoginComponent />} />
                <Route path='/welcome/:username' element={<WelcomeComponent />} />
                <Route path='/todos' element={<ListTodosComponent />} />
                <Route path='*' element={<ErrorComponent />} />   {/*error page is shown to the user for a not defined path */}
            </Routes>
            
            </BrowserRouter> 
            
               
        </div>
    )


}


