import React from 'react';
import axios from 'axios';
import './App.css';
import Feel from '../Feel/Feel.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx'
import Comments from '../Comments/Comments.jsx'
import Review from '../Review/Review.jsx'
import { HashRouter as Router, Route, Link} from 'react-router-dom';

function App() {

  return (
    <div className='App'>
    <header className='App-header'>
      <h1 className='App-title'>Let's Check in!</h1>
    </header>
    
    <Router>
      <Route path= "/" exact>
        <div className= "surveyDescription">
          <h2> We would like to take this opportunity to allow you to reflect on your day by 
                answering four simple questions.  
                When you are ready, please hit the button below and get started
          </h2>
          </div>
          <Link to= "/feeling">
          <button className= "startBtn"> Start Your Reflection For the Day</button>
          </Link>
      </Route>
      
        <Route path= "/feeling" exact>
          <Feel />
        </Route>
        
        <Route path= "/understanding" exact>
          <Understanding />
        </Route>
       
        <Route path= "/support" exact>
          <Support />
        </Route>
        
        <Route path="/comments" exact>
          <Comments />
        </Route>
        <Route path= "/review" exact>
          <Review />
        </Route>
   
   </Router>
   </div>
  );
}

export default App;
