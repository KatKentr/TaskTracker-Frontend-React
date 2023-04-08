import {Link} from 'react-router-dom';
import { useAuth } from './security/AuthContext';



function HeaderComponent() {


    const authContext = useAuth()

    const isAuthenticated= authContext.isAuthenticated   //depending on the authentication status we want to enable/disable Home, Login and Logout links present in the Header

    function logout(){

        authContext.SetAuthenticated(false) 
    }

    //console.log(authContext);   

    return (
        
        <header className="header">
            <div className="container">
            <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.ToDoApp.com">TodoApp</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                {isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/MyApp">Home</Link></li>}                                
                                {isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>}
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                        {!isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>}
                        {isAuthenticated &&  <li className="nav-item fs-5"><Link className="nav-link" to="/logout" onClick={logout}>Logout</Link></li>}  {/* when logout is clicked we set authContext.SetAuthenticated to false */}
                        </ul>
                    </nav>
                </div>
              
            </div>
        </header>
    )

}



export default HeaderComponent;