import React from 'react';
import './Descripcion.css';
import foto from './flor_de_lis.png'

function Descripcion() {
  return (
    <div className='descripcion'>
        <div className='texto'></div>
        <div className='logodiv'><img src={foto} className='img'></img></div>
    </div>
  );
}

export default Descripcion;