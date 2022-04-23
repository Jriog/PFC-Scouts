import React, { useState } from 'react';
import { NavLink} from "react-router-dom";
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
        <h4><NavLink to="../Pages/Home/Home">San Jorge 33</NavLink></h4>
      </div>
      <ul className={isActive ? "nav-links dropdown nav-active" : "nav-links dropdown"}>
        <li><NavLink  to="../Pages/Home/Home">Home</NavLink></li>
        <li><NavLink to="../Pages/About/About">¿Quienes somos?</NavLink></li>
        <li><NavLink to="../Pages/Sections/Sections">Secciones</NavLink></li>
        <li><NavLink to="../Pages/World_Scout/World_Scout">Mundo Scout</NavLink></li>
        <li><NavLink to="../Pages/JoinUs/JoinUs">Apúntate</NavLink></li>
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
