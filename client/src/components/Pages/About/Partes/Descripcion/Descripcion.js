import React from 'react';
import './Descripcion.css';
import foto_grupo from './grupo.jpg'


function Descripcion() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id='aboutUs' class="h-64 grid grid-cols-5 gap-4">
        <div></div>   
        <div className='col-span-3'>
          <a className='titulo'>
          Quiénes somos
          </a>
          <br></br>
          <br></br>
          <p className='description'>
            El <b>Grupo Scout San Jorge 33</b>, miembro de <a className='enlace'href="http://www.scout.es/" target="_blank" rel="noopener">ASDE – Scouts de Galicia</a> y
            por tanto de la <a className='enlace'href="http://www.scoutsdegalicia.org/" target="_blank" rel="noopener">Federación de Asociaciones de Scouts 
            de España (ASDE)</a>, es una <b>asociación sin ánimo de lucro</b> infantil y juvenil, orientado por adultos voluntarios comprometidos en el servicio 
            educativo, que ofrece los medios y ocasiones necesarios a fin de contribuir a la educación integral de las personas, 
            potenciando principalmente su sentido de la responsabilidad, libertad y servicio, según el Método Scout iniciado 
            por <a  className='enlace'href="https://es.wikipedia.org/wiki/Robert_Baden-Powell" target="_blank" rel="noopener">Baden Powell</a> y un sistema de educación progresiva.
          </p>
        </div>
        <div></div>
      </div>
      <div class="grid grid-cols-5 gap-4"><div></div><div className='col-span-3'><img src={foto_grupo} alt='' className='foto_desription'/></div></div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Descripcion;