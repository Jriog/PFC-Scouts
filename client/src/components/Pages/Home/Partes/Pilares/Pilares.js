import React from 'react';
import './Pilares.css';
import pergamino from './images/pergaminoBG.png'

function Pilares() {
  return (
    <div className='h-screen '>
      <div id='pilares' class="grid grid-cols-12 content-center ...">
        <div class=""></div>
        <div class="h-96 grid grid-rows-6 col-span-2">
          <div class=""></div>
          <div class="textopilares">El <b>método educativo</b> del grupo se basa en los 3 pilares más importantes del movimiento scout</div>
          <div class=""></div>
        </div>
        <div class=""></div>
        <div class=""></div>
        <div id='pilar1' class="pilar gap-2 col-span-2" >
        <b>Educación en</b>
        <br></br>
        <b>valores:</b>
        <br></br>
        <div>El joven establece libremente un compromiso personal ante sus compañeros, asumiendo una responsabilidad: 
        social, personal, ética… resumidos en la promesa y la Ley Scout.</div>
        </div>

        <div id='pilar2'class="pilar gap-2  col-span-2">
          <b>La vida en</b>
          <br></br>
          <b>pequeños grupos:</b>
          <br></br>
          <div> El pequeño grupo socializa, identifica a sus miembros con los objetivos de las actividades y 
          permite profundizar en el conocimiento mutuo.</div>
        </div>

        <div id='pilar3'class="pilar gap-2  col-span-2">
          <b> La formación</b>
          <br></br>
          <b>autogestionada: </b>
          <br></br>
          <div>Cada joven participa en su propio proceso de desarrollo, 
            formando parte activa de las diferentes etapas en las que se determina el Programa Educativo</div>   
        </div>
        <div class=""></div>
        <div class=""></div>  
      </div>
    </div>
  );
}

export default Pilares;