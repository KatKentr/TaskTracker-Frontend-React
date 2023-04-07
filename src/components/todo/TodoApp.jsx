import './TodoApp.css'
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//the container for all the components that will be created
export default function TodoApp(){

    return (
        <div className="TodoApp">
            Todo Management Application
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginComponent />}></Route>
                <Route path='/login' element={<LoginComponent />}></Route>
                <Route path='/welcome' element={<WelcomeComponent />}></Route>
            </Routes>
            
            </BrowserRouter> 
            
               
        </div>
    )


}


