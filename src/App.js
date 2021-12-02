import './App.css';
import Header from './Header';
import React from 'react';
import TinderCards from './TinderCard';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">

     <Header />
     <TinderCards />
     <SwipeButtons />
 

    </div>
  );
}

export default App;
