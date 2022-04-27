import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Nav from "../Navbar/Nav";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Sections from "../Pages/Sections/Sections";
import World_Scout from "../Pages/World_Scout/World_Scout";
import JoinUs from "../Pages/JoinUs/JoinUs";


export default function router() {
  return (
    <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route path="/sections" element={<Sections/>}>
          </Route>
          <Route path="/world_Scout" element={<World_Scout/>}>
          </Route>
          <Route path="/joinUs" element={<JoinUs/>}>
          </Route>
        </Routes>
    </Router>
  );
}