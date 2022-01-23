import {useDispatch} from 'react-redux';
import { Typography, Rating } from '@mui/material';
import React, { useState } from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

function Support(){
    //set value from rating buttons 
    const [support, setSupport]= useState(0);
 
    //setup dispatch:
    const dispatch = useDispatch();

    //when next button is pushed
            //(1) send "support" (name) and value to reducer using dispatch
            //(2) go to next page 
    
    const onNext2Button = () => {
        console.log('in onNextButton support is', support);
       
        //dispatch request:
        dispatch({
            type: 'ADD_SUPPORT',
            payload: support
        })
    }
    return(
    <>
     <div> 
            <div className="pageHeader"> 
            <h2> HOW WELL DO YOU FEEL SUPPORTED?</h2>
            </div>
                    <div className= "question">
                    <Typography component="legend">Rate Your Feeling of Support</Typography>
                    <Rating
                            name= "feeling"
                            defaultValue={0}
                            size="large"
                            value={support}
                            onChange={(event, newValue) => {
                                setSupport(newValue);
                              }}
                        />
                    </div>
                    <Link to= "/comments">
                    <button className="nextButton" onClick={onNext2Button}> <h2>
                                            NEXT QUESTION </h2>
                    </button>
                    </Link>
        </div>
    </>
    )
}
export default Support;