import React from 'react';
import './donde_estan.css';
import mapa_WOSM from "./map_wosm.jpg";

function donde_estan() {
  return (
    <div id='D_E'>
      <br></br>
      <br></br>
      <br></br>
      <div className='grid grid-cols-5 gap5'>
        <div></div>
        <div className='col-span-2 DE'>
          <br></br>
          <br></br>
          <h1 id="titulo_movS">DÓNDE ESTAMOS</h1>
          <br></br>
          <p>
            El movimiento scout existe en 162 países lo que suponen más de 460 millones de personas, de diferentes culturas,
            lenguas y religiones trabajando por construir un mundo mejor. Todo ello gracias a cerca de 7 millones de adultos voluntarios
            que apoyan las actividades que desarrollan los grupos scouts.
          </p>
          <br></br>
          <p>
            La Organización Mundial del Movimiento Scout (OMMS) es una organización independiente, mundial, sin fines de lucro
            y no partidista, la cual sirve al Movimiento Scout. Su finalidad es promover la unidad y el entendimiento de los principios
            y propósitos del Movimiento Scout, facilitando al mismo tiempo la expansión y el desarrollo del mismo.
            Los órganos de la Organización Mundial son la Conferencia Scout Mundial, el Comité Scout Mundial y la Oficina Scout Mundial.
          </p>
          <br></br>
        </div>
        <div>
          <div><img class="mapa" src={mapa_WOSM}></img></div>
        </div>
      </div>
    </div>
  );
}

export default donde_estan;