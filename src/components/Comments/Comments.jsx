import {useDispatch} from 'react-redux';
import { FormControl, OutlinedInput, TextField  } from '@mui/material';
import React, { useState } from 'react';

function Comments(){
    //set value from rating buttons 
    const [comment, setComment]= useState('');
 
    //setup dispatch:
    const dispatch = useDispatch();

    //when next button is pushed
            //(1) send "support" (name) and value to reducer using dispatch
            //(2) go to next page 
    
    const onNext3Button = () => {
        console.log('in onNextButton favorite Song is', comment);
       
        //dispatch request:
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment
        })
        setComment('')
    }

    const handleChange = event => {

        setComment(event.target.value)
    }

    return(
    <>
     <div> 
            <div className="pageHeader"> 
            <h2> WHAT IS YOUR FAVORITE SONG OF THE DAY?</h2>
            </div>
                    <div className= "question">
                    <TextField
                            placeholder='Favorite Song Here'
                            value={comment}
                            onChange= {handleChange}
                                       >
                            
                    </TextField>
                       
                    </div>
                    <button className="nextButton" onClick={onNext3Button}> 
                                            NEXT QUESTION 
                    </button>
        
        </div>
    </>
    )
}
export default Comments;