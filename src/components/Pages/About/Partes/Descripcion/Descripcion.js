import React from 'react';
import './Descripcion.css';
import foto from './flor_de_lis.png'


function Descripcion() {
  return (
    <div id='descripcion' class="h-screen grid grid-cols-8 gap-4 content-center ...">
      <div></div>
      <div className='texto col-span-4'>El grupo, fundado en el año 1965, 
       es una Asociación sin ánimo de lucro que se basa en un proyecto educativo dirigido a infancia, adolescencia y juventud con el objetivo de promover su educación 
       y su implicación social.</div>
      <div className='logodiv col-span-2'><img src={foto} alt="flor de lis" className='img'></img></div>
      <div></div>
    </div>
  );
}

export default Descripcion;