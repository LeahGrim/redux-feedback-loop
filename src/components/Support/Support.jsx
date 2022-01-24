import {useDispatch} from 'react-redux';
import { Typography, Rating } from '@mui/material';
import React, { useState } from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

function Support(){
    const history = useHistory();

    //set value from rating buttons 
    const [support, setSupport]= useState(0);
 
    //setup dispatch:
    const dispatch = useDispatch();

    //when next button is pushed
            //(1) send "support" (name) and value to reducer using dispatch
            //(2) go to next page 
    
    const onNext2Button = () => {
        console.log('in onNextButton support is', support);
        //input validation
        if (support=== 0){
            alert('no shortcuts when it comes to your feelings, give us a 1-5 star value')
           
        } else{
        //dispatch request:
        dispatch({
            type: 'ADD_SUPPORT',
            payload: support
        })
        history.push('/comments')

        }
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
                 
                    <button className="nextButton" onClick={onNext2Button}> <h2>
                                            NEXT QUESTION </h2>
                    </button>
                  
        </div>
    </>
    )
}
export default Support;