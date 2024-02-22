import React from 'react';
import './App.css';
import RatingStar from './components/RatingStar';

function App() {
  return (
    <div className="App">
      <RatingStar maxRating={10}/>
    </div>
  );
}

export default App;
