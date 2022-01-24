import './Feel.css';
import {useDispatch} from 'react-redux';
import { Typography, Rating } from '@mui/material';
import React, { useState } from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

function Feel(){
    const history = useHistory();

   //set value from rating buttons 
    const [feeling, setFeeling]= useState(0);
 
    //setup dispatch:
    const dispatch = useDispatch();

    //when next button is pushed
            //(1) send "feeling" (name) and value to reducer using dispatch
            //(2) go to next page 
    
    const onNext1Button = (event) => {
        
        console.log('in onNextButton Feeling is', feeling);
        
        //input validation
        if (feeling=== 0){
            alert('no shortcuts when it comes to your feelings, give us a 1-5 star value')
           
        }else{
        //dispatch request:
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        })
        history.push('/understanding')
        }
    }


    return(
        
        <>
        <div> 
            <div className="pageHeader"> 
            <h2> HOW ARE YOU FEELING TODAY?</h2>
            </div>
                    <div className= "question">
                    <Typography component="legend"> Rate your Feelings </Typography>
                    <Rating
                            name= "feeling"
                            defaultValue={1}
                            value={feeling}
                            required
                            onChange={(event, newValue) => {
                                setFeeling(newValue);
                              }}
                        />
                    </div>
                    
                    <button className="nextButton" onClick={onNext1Button}> <h2>
                                            NEXT QUESTION </h2>
                    </button>
 
        
        </div>
        </>



    )
}

export default Feel;