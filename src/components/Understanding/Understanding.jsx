import './Understanding.css'
import {useDispatch} from 'react-redux';
import { Typography, Rating } from '@mui/material';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

function Understanding(){
    //define history so that we can use it to change pages 
    const history = useHistory();
    //set value from rating buttons 
    const [understanding, setUnderstanding]= useState(0);
 
    //setup dispatch:
    const dispatch = useDispatch();

    //when next button is pushed
            //(1) send "understanding" value to reducer using dispatch
            //(2) go to next page 
    
    const onNext2Button = () => {
        console.log('in onNextButton understanding is', understanding);
       //input validation
       if (understanding=== 0){
        alert('no shortcuts when it comes to your feelings, give us a 1-5 star value')
       
    }else{
        //dispatch request:
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        })
        history.push('/support')

    }
}
    return(
        <>
        <div> 
            <div className="pageHeader"> 
            <h2> HOW ARE YOU UNDERSTANDING NEW CONCEPTS?</h2>
            </div>
                    <div className= "question">
                    <Typography component="legend">Rate your Understanding of Content</Typography>
                    <Rating
                            name= "understanding"
                            defaultValue={0}
                            size="large"
                            value={understanding}
                            onChange={(event, newValue) => {
                                setUnderstanding(newValue);
                              }}
                        />
                    </div>
                  
                    <button className="nextButton" onClick={onNext2Button}> <h2>
                                            NEXT QUESTION  </h2>
                    </button>
                
        </div>
        </>
    )
}
export default Understanding;