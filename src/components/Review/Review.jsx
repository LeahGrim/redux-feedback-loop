import { useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';


function Review(){
    //grab values submitted from the client from the store 
    const feelingSummary = useSelector(store => store.feedbackReducer)
    console.log('feelingSummary is', feelingSummary);
    
    return(
        <>
        <li> How are you feeling today?  
                <br/> {feelingSummary.feeling}  </li>
        <li> How well are you understanding content? 
                <br/> {feelingSummary.understanding} </li>
        <li> How well do you feel supported? 
                <br/> {feelingSummary.support} </li>
        <li> Favorite song of the day?
                <br/> {feelingSummary.comment}</li>
        <br/>
        <button > CONFIRM RESPONSES </button>
        </>
    )
}

export default Review;