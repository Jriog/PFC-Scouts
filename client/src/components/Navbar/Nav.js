import React, { useState } from 'react';
import { NavLink} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import '../i18n.js';
import './Nav.css';
import $ from 'jquery';
import lg_es from "../../assets/lg_es.jpg";
import lg_gl from "../../assets/lg_gl.png";

function Nav() {
  const { t, i18n } = useTranslation();

  const goToTop = () => {
    window.scrollTo({
        top: 0,
    });
};

$('#galicia').click(
  console.log('Galicia'),
  $('#españa').css({'width':'40px'}),
  $('#galicia').css({'width':'50px'})
);

$('#españa').click(
  console.log('España'),
  $('#galicia').css({'width':'40px'}),
  $('#españa').css({'width':'50px'})
);

return (


    <nav id="navbar">
      <div className="logo">
        <h4><NavLink to="/" onClick={goToTop}>San Jorge 33</NavLink></h4>
      </div>

      <ul className={"nav-links"}>
        <li><NavLink to="/about" onClick={goToTop}>{t("whos")}</NavLink></li>
        <li><NavLink to="/sections" onClick={goToTop}>{t("sections")}</NavLink></li>
        <li><NavLink to="/mundo_Scout" onClick={goToTop}>{t("w_scout")}</NavLink></li>
        <li><NavLink to="/contacto" onClick={goToTop}>{t("contacto")}</NavLink></li>
      </ul>
      <div className="row mt-5">
        <div className="col-md-8 offset-md-2">
          <button type="button" className="btn btn-secondary flag" onClick={() => i18n.changeLanguage('es')} disabled={i18n.language === 'es'}>
            <img id="españa" classname="" src={lg_es}/>
          </button>
          <button type="button" className="btn btn-primary ml-2 flag" onClick={() => i18n.changeLanguage('gl')} disabled={i18n.language === 'gl'}>
          <img  id="galicia" classname="" src={lg_gl}/>
          </button>
          
        </div>
      </div>
    </nav>
  );
}

export default Nav;
