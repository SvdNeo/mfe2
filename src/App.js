import React from 'react';
import './App.css'; // Import CSS file
const MFE1_Button = React.lazy(() => import('MFE1/Button'));
const MFE2Footer = React.lazy(() => import('MFE2Footer/Footer')); // Import the Footer component

function App() {
  return (
    <div className="app">
      <React.Suspense fallback='Loading Button'>
        <MFE1_Button />
      </React.Suspense>
      <div className="middle-container">
        <h1>Micro-Frontend Host</h1>
      </div>
      <React.Suspense fallback='Loading Footer'>
        <MFE2Footer/> 
      </React.Suspense>
    </div>
  );
}

export default App;
