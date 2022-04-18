import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/Pages/About/About'; 
import Home from './components/Pages/Home/Home' ;
import Sections from './components/Pages/Sections/Sections';
import World from './components/Pages/World_Scout/World_Scout' ;
import JoinUs from './components/Pages/JoinUs/JoinUs' ;

export default function router() {
  return (
    <Router>
      <div>
      
        <Switch>
          <Route path="./components/Pages/Home/Home">
            <Home/>
          </Route>
          <Route path="./components/Pages/About/About">
            <About/>
          </Route>
          <Route path="./components/Pages/Sections/Sections">
            <Sections/>
          </Route>
          <Route path="./components/Pages/World_Scout/World_Scout">
            <World/>
          </Route>
          <Route path="./components/Pages/JoinUs/JoinUs">
            <JoinUs/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}