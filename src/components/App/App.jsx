import React from 'react';
import axios from 'axios';
import './App.css';
import Feel from '../Feel/Feel.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx'
import Comments from '../Comments/Comments.jsx'
function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Let's Check in!</h1>
  
      </header>
     <Feel />
     <Understanding />
     <Support />
     <Comments />



    </div>
  );
}

export default App;
