import { useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import './Review.css'

function Review(){
    //grab values submitted from the client from the store 
    const feelingSummary = useSelector(store => store.feedbackReducer)
    console.log('feelingSummary is', feelingSummary);
    
    return(
        <>
        <div className= "headlines">
        <h1> How are you feeling today?  
                <br/> {feelingSummary.feeling}  </h1>
        <h1> How well are you understanding content? 
                <br/> {feelingSummary.understanding} </h1>
        <h1> How well do you feel supported? 
                <br/> {feelingSummary.support} </h1>
        
        <h1> Favorite song of the day?
                <br/> {feelingSummary.comment}</h1>
        <br/>
        <button className="confirmBtn"> <h1>CONFIRM RESPONSES </h1></button>
        </div>
        </>

    )
}

export default Review;