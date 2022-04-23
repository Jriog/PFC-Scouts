import React from 'react';
import './App.css';
import Router from "./components/Router/Router";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <div>
        <Router/>
      </div>
      <div>
      <Footer/>   
      </div>
    </div>
  );
}

export default App;
