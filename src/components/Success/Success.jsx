import { HashRouter as Router, Link} from 'react-router-dom';
import './Success.css';
function Success (){
    return(
        <>
        <div className= "thankful">
            <h1> Thank you for taking the time to complete this questionnaire. </h1>
        </div>
        <Link to= "/">
        <button> <h3> TAKE ME BACK TO COMPLETE ANOTHER SURVEY</h3></button>
        </Link>
        </>
    )
}
export default Success;