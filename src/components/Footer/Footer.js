import React from 'react';
import './Footer.css';
import instagram from './instagram.png';
import mail from './mail.png';

function Footer() {
  return (
    <div className=''>
      <div class="grid grid-rows-3 md:grid-rows-3">
        <div class="grid grid-cols-9 gap-5">
          <div></div>
          <div></div>
          <div class="referencia">¿Quienes somos?</div>
          <div class="referencia">Secciones</div>
          <div class="referencia">Mundo Scout</div>
          <div class="referencia">Apúntate</div>
          <div class="referencia">Tienda</div>
          <div></div>
          <div></div>
        </div>
        <div class="grid grid-cols-5 gap-4">
          <div></div>
          <div></div>

          <div className='referencia'>
          Nos puedes contactar a través de: <a href='https://www.instagram.com/sanjorge33/'><img src={instagram} alt="instagram"></img></a>   <a href='malito:grupo@sanjorge33.org'><img src={mail} alt="instagram"></img></a>
          </div>
          <div></div>
          <div></div>

        </div>
        <div className='referencia'><a href=''>© 2022 Grupo Scout San Jorge 33</a></div>
      </div>
    </div>
  
  );
}

export default Footer;