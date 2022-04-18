import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import './Nav.css';
function Nav() {
  const [isActive, setActive] = useState(false);

  const showMenu = () => {
    setActive(!isActive);

    /* Aquí es lo que no me funciona

    Debería hacer una animación para que cuando se clicke la burguer y se despliegue el menu aparezcan poco a poco los li del menu
    En JS Vanilla es ell siguiente código:

    const navLinks = document.querySelectorAll('.nav-links li')

    navLinks.forEach((link, index)=>{
          if(link.style.animation){
              link.style.animation = ''
          }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
          }
      })

    
    */
  }

  return (
    <nav id="navbar">
      <div className="logo">
        <h4><a href="" >San Jorge 33</a></h4>
      </div>
      <ul className={isActive ? "nav-links dropdown nav-active" : "nav-links dropdown"}>
        
        <li><a href="">Home</a></li>
        <li><a href="">¿Quienes somos?</a></li>
        <li><a href="">Secciones</a></li>
        <li><a href="">Mundo Scout</a></li>
        <li><a href="">Apúntate</a></li>
      </ul>

      <div onClick={showMenu} className={isActive ? "burger toggle" : "burger"}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Nav;
