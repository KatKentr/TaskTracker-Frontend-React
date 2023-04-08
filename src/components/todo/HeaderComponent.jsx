import {Link} from 'react-router-dom';
import { AuthContext } from './security/AuthContext';
import { useContext } from 'react';


function HeaderComponent() {

    const authContext = useContext(AuthContext)

    console.log(authContext.number);

    return (
        
        <header className="header">
            <div className="container">
            <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.ToDoApp.com">TodoApp</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/MyApp">Home</Link></li>
                                <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
              
            </div>
        </header>
    )

}



export default HeaderComponent;