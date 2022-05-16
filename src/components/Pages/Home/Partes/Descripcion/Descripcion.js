import React from 'react';
import './Descripcion.css';
import foto from './flor_de_lis.png'

function Descripcion() {
  return (
    <div id='descripcion' class="h-56 grid grid-cols-5 gap-4 content-center ...">
      <div></div>
      <div className='texto'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</div>
      <div></div>
      <div className='logodiv'><img src={foto} alt="flor de lis" className='img'></img></div>
      <div></div>
    </div>
  );
}

export default Descripcion;