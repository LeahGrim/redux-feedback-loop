import './Feel.css';
import {useDispatch} from 'react-redux';
import { Typography, Rating } from '@mui/material';
import React, { useState } from 'react';

function Feel(){
   //set value from rating buttons 
    const [feeling, setFeeling]= useState(0);
 
    //setup dispatch:
    const dispatch = useDispatch();

    //when next button is pushed
            //(1) send "feeling" (name) and value to reducer using dispatch
            //(2) go to next page 
    
    const onNext1Button = () => {
        console.log('in onNextButton Feeling is', feeling);
       
        //dispatch request:
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        })
    }


    return(
        
        <>
        <div> 
            <div className="pageOneHeader"> 
            <h2> HOW ARE YOU FEELING TODAY?</h2>
            </div>
                    <div className= "question1">
                    <Typography component="legend">Rate your Feelings</Typography>
                    <Rating
                            name= "feeling"
                            defaultValue={0}
                            size="large"
                            value={feeling}
                            onChange={(event, newValue) => {
                                setFeeling(newValue);
                              }}
                        />
                    </div>
                    <button className="nextButton" onClick={onNext1Button}> 
                                            NEXT QUESTION 
                    </button>
        
        </div>
        </>



    )
}

export default Feel;