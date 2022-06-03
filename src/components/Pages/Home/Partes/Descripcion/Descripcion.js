import React from 'react';
import './Descripcion.css';
import foto from './flor_de_lis.png'


function Descripcion() {
  return (
    <div id='descripcion' class="h-56 grid grid-cols-8 gap-4 content-center ...">
      <div></div>
      <div className='texto col-span-4'>La Asociación, fundada en el año 1965, 
       es una Asociación que se basa en un proyecto educativo dirigido a infancia, adolescencia y juventud con el objetivo de promover su educación integral
       y su implicación social. El escultismo trabaja con y para la infancia y la juventud con la ilusión de construir un mundo mejor 
       a través del liderazgo entre iguales.</div>
      <div className='logodiv col-span-2'><img src={foto} alt="flor de lis" className='img'></img></div>
      <div></div>
    </div>
  );
}

export default Descripcion;