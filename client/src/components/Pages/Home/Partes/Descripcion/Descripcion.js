import React from 'react';
import './Descripcion.css';
import foto from './grupo.jpg'

function Descripcion() {
  return (
    <div className='h-screen'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div id='aboutUs' class="grid grid-cols-5 gap-4">
      <div></div>   
      <div className='col-span-3'>
        <a className='titulo_home'>
        Grupo Scout San Jorge 33
        </a>
        <br></br>
        <br></br>
        <p className='description'>
        El grupo, <b>fundado en el año 1965</b>, es una <b>asociación sin ánimo de lucro</b> que se basa en un proyecto educativo dirigido a infancia, adolescencia y juventud con el objetivo de promover su educación y su implicación social.
        </p>
      </div>
      <div></div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div class="grid grid-cols-5 gap-4"><div></div><div className='col-span-3'><img src={foto} alt='' className='img_home'/></div></div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </div>
  );
}

export default Descripcion;