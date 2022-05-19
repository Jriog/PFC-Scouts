import React, { useState } from 'react';
import { NavLink} from "react-router-dom";
import './Nav.css';

function Nav() {
  const [isActive, setActive] = useState(false);

  const showMenu = () => {
    setActive(!isActive);

    /* TODO

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
        <h4><NavLink to="/">San Jorge 33</NavLink></h4>
      </div>
      <ul className={isActive ? "nav-links dropdown nav-active" : "nav-links dropdown"}>
        <li><NavLink to="/about">¿Quienes somos?</NavLink></li>
        <li><NavLink to="/sections">Secciones</NavLink></li>
        <li><NavLink to="/world_Scout">Mundo Scout</NavLink></li>
        <li><NavLink to="/joinUs">Apúntate</NavLink></li>
        <li><NavLink to="/tienda">Tienda</NavLink></li>
      </ul>

      <div onClick={showMenu} className={isActive ? "burger toggle" : "burger"}>
        <ul className={isActive ? "nav-links dropdown nav-active" : "nav-links dropdown"}>
          <li><NavLink  to="/">Home</NavLink></li>
          <li><NavLink to="/about">¿Quienes somos?</NavLink></li>
          <li><NavLink to="/sections">Secciones</NavLink></li>
          <li><NavLink to="/world_Scout">Mundo Scout</NavLink></li>
          <li><NavLink to="/joinUs">Apúntate</NavLink></li>
          <li><NavLink to="/tienda">Tienda</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
