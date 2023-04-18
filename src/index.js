import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//REDUCERS 
const feedbackReducer = (
    state = {
        feeling: '', 
        understanding: '',
        support: '',
        comments: '',
        memory:''
}, 
action) => {
    switch (action.type){
        case 'ADD_FEELING':
            return {...state, feeling: (state.feeling = action.payload)};
        case 'ADD_UNDERSTANDING':
            return{...state, understanding: (state.understanding = action.payload)};
        case 'ADD_SUPPORT':
            return{...state, support: (state.support = action.payload)};
        case 'ADD_COMMENT':
            return{...state, comments: (state.comments = action.payload)};
        case 'ADD_MEMORY':
            return{...state, memory: (state.memory = action.payload)};
        case 'EMPTY_STATE':
            state= {
                    feeling: '', 
                    understanding: '',
                    support: '',
                    comments: '',
                    memory:''}
            return state
        }
    return state;
}


//create the store object to hold all the App Info
const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    //applyMiddleWare(logger)
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider store= {storeInstance}><App /> </Provider> , document.getElementById('root'));
registerServiceWorker();
