import React from 'react';
import './Sections.css';
import castores from './colonia.jpg'
import lobatos from './manada.jpg'
import scouts from './scouts.jpg'
import escultas from './esculta.jpg'
import rovers from './clan.jpg'
import scouters from './scouters.jpg'


function Sections() {
  return (
    <div id="sections">
      <br></br>
      <br></br>
      <br></br>
      <div id="main_sections">
        <div className='grid grid-cols-5'>
          <div></div>
         <div className='col-span-2'>
          <a id="tittle_part">SECCIONES</a>
          <br></br>
          <br></br>
          <p><b>Grupos Locales:</b> una forma de organizarnos es a través de Grupos Scouts, que pertenecen a un barrio o localidad.
          Los grupos se componen de varias secciones según edad.</p>
          <p>
          <b>Reuniones:</b> Durante el año escolar los grupos se reúnen los fines de semana. 
          Se organizan acampadas de fin de semana y en verano campamentos de dos semanas.
          </p>
          </div>
         <div><img src=''></img></div>
        </div>
        <br></br>
        <div id="sections_explanation_1" className='grid grid-cols-5  gap-5'>
          <div></div>
          <div id='colonia'>
            <br></br>
            <br></br>
            <br></br>
            <div className='foto_sections'>
              <div><img class="imgs_sections" src={castores}></img></div>
            </div>
            <div id="t_colonia"><button className='tittle_section'>Colonia</button></div>
            <br></br>
            <div>La Colonia de castores son los niños y niñas de 6 a 8 años. Es la edad de la máxima ilusión por descubrirlo todo.</div>
          </div>
          <div id='manada'>
          <br></br>
          <br></br>
            <div className='foto_sections'>
              <div><img class="imgs_sections" src={lobatos}></img></div>
            </div>
            <div id="t_manada"><button  className='tittle_section'>Manada</button></div>
            <br></br>
            <div>Tras su paso por la Colonia y al cumplir los 8 años, niños y niñas entran a formar parte de la Manada de Lobatos.</div>
          </div>
          <div id='scouts'>
          <br></br>
          <br></br>
            <div className='foto_sections'>
              <div><img class="imgs_sections" src={scouts}></img></div>
            </div>
            <div id="t_scouts"><button className='tittle_section'>Scouts</button></div>
            <br></br>
            <div>Al alcanzar los once años llega el momento de entrar a formar parte de la Sección Scout.</div>
          </div>
        </div>

        <div id="sections_explanation_2" className='grid grid-cols-5 gap-5'>
          <div></div>
          <div id='escultas'>
            <br></br>
            <div className='foto_sections'>
              <div><img class="imgs_sections" src={escultas}></img></div>
            </div>
            <div id="t_esculta"><button className='tittle_section'>Esculta</button></div>
            <br></br>
            <div>Cumplidos los 14 años, los chicos y chicas comienzan a trabajar en la Unidad Esculta.</div>
          </div>
          <div id='rovers'>
            <br></br>
            <div className='foto_sections'>
              <div><img class="imgs_sections" src={rovers}></img></div>
            </div>
            <div id="t_rovers"><button className='tittle_section'>Clan</button></div>
            <br></br>
            <div>La última etapa de la educación scout es el Clan Rover  formado por jóvenes a partir de 17 años.</div>
          </div>
          <div id='scouters'>
            <div className='foto_sections'>
              <div><img class="imgs_sections" src={scouters}></img></div>
            </div>
            <div id="t_scouters"><button className='tittle_section'>Scouters</button></div>
            <br></br>
            <div>Nunca es tarde para pertenecer a un Grupo Scout.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;