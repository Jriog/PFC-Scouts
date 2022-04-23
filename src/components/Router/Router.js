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
          <Route path="../Pages/Home/Home" element={<Home/>}>
          </Route>
          <Route path="../Pages/About/About" element={<About/>}>
          </Route>
          <Route path="../Pages/Sections/Sections" element={<Sections/>}>
          </Route>
          <Route path="../Pages/World_Scout/World_Scout" element={<World_Scout/>}>
          </Route>
          <Route path="../Pages/JoinUs/JoinUs" element={<JoinUs/>}>
          </Route>
        </Routes>
    </Router>
  );
}