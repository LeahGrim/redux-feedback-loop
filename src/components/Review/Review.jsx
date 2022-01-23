import { useSelector, useDispatch } from 'react-redux';

import { HashRouter as Router, Route, Link} from 'react-router-dom';
import './Review.css';
import axios from 'axios';

function Review(){
    //grab values submitted from the client from the store 
    const feelingSummary = useSelector(store => store.feedbackReducer)
    console.log('feelingSummary is', feelingSummary);
    
      //setup dispatch:
      const dispatch = useDispatch();

        //not sure if this is necessary but wrapping my object sent from store in an object 
        // object will be posted to database
        const feedbackToSend={
            feeling: feelingSummary.feeling,
            understanding: feelingSummary.understanding,
            support: feelingSummary.support,
            comments: feelingSummary.comments
            }
    
        const saveToDatabase = () => {
            axios.post('/api/feedback', feedbackToSend)
            .then(res => {
                console.log('POST /feedback is', res.data)
                dispatch({
                    type: 'EMPTY_STATE'
                })
            })
            .catch(err => {
                console.log('POST /feedback failed, error is', err)
            })

         }

    
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
                <br/> {feelingSummary.comments}</h1>
        <br/>
        <Link to="/success">
        <button className="confirmBtn" onClick={saveToDatabase}> <h1>CONFIRM RESPONSES </h1></button>
        </Link>
        </div>
        </>

    )
}

export default Review;