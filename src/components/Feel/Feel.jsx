import './Feel.css';
import {useDispatch} from 'react-redux';
import { Typography, Rating } from '@mui/material';
import React, { useState } from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

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
            <div className="pageHeader"> 
            <h2> HOW ARE YOU FEELING TODAY?</h2>
            </div>
                    <div className= "question">
                    <Typography component="legend"> <h2>Rate your Feelings </h2></Typography>
                    <Rating
                            name= "feeling"
                            defaultValue={0}
                            size="50px"
                            value={feeling}
                            onChange={(event, newValue) => {
                                setFeeling(newValue);
                              }}
                        />
                    </div>
                    <Link to= "/understanding">
                    <button className="nextButton" onClick={onNext1Button}> <h2>
                                            NEXT QUESTION </h2>
                    </button>
                    </Link>
        
        </div>
        </>



    )
}

export default Feel;