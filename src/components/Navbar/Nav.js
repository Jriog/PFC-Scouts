import React, { useState } from 'react';
import { NavLink} from "react-router-dom";
import './Nav.css';

function Nav() {
   return (
   
    <nav id="navbar">
      <div className="logo">
        <h4><NavLink to="/">San Jorge 33</NavLink></h4>
      </div>
      <ul className={"nav-links"}>
        <li><NavLink to="/about">¿Quienes somos?</NavLink></li>
        <li><NavLink to="/sections">Secciones</NavLink></li>
        <li><NavLink to="/world_Scout">Mundo Scout</NavLink></li>
        <li><NavLink to="/joinUs">Apúntate</NavLink></li>
        <li><NavLink to="/Store">Tienda</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
