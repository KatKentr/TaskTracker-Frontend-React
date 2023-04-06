import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";

//the container for all the components that will be created
export default function TodoApp(){

    return (
        <div className="TodoApp">
            Todo Management Application  
            <LoginComponent />
            <WelcomeComponent />   
        </div>
    )


}


