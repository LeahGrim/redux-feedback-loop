import React from 'react';
import axios from 'axios';
import './App.css';
import Feel from '../Feel/Feel.jsx';
import PageTwo from '../PageTwo/PageTwo.jsx';
function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
     <Feel />
     <PageTwo />



    </div>
  );
}

export default App;
