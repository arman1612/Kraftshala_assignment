import React from 'react';
import './App.css';

import Header from './Header';
import Display from './Display';

function App() {
  
  

  return (
    <div className="container-fluid">
      <div className="row">
       
        {/* Header part */}
        <Header />
         
        {/* Weather display */}
        <Display />


      </div>
    </div>
  );
}

export default App;
