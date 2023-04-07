
import {useParams,Link} from 'react-router-dom'


function WelcomeComponent() {

    const {username  } =useParams()

    return (
        
        <div className="WelcomeComponent">

           <h1>Welcome {username}</h1>
           <div>
            {/* add a link from the welcome component to the todos component */}
              Manage your todos <Link to="/todos">Go here</Link>
           </div>
        </div>

    )

}



export default WelcomeComponent;