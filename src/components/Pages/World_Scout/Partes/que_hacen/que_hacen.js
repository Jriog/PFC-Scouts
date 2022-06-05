import React from 'react';
import './que_hacen.css';
import img2 from './img_2.jpg';

function que_hacen() {
  return (
    <div id='Q_H'>
      <br></br>
      <br></br>
      <br></br>
      <div className='grid grid-cols-5 gap5'>
        <div></div>
        <div className='col-span-2'>
          <h1 id='titulo_movS'>QUÉ HACEMOS</h1>
          <br></br>
          <p>
            <b>Trabajamos por una educación en valores</b> en el tiempo libre y lo hacemos desarrollando un método propio de actuación,
            el método scout, que ha demostrado fusionar en sus más de 100 años de historia la tradición y la innovación.
            Tradición en los principios que impulsan a cada scout a trascender la realidad de cada día y a comprometerse personal y
            libremente con los ideales y valores sobre los que construir un mundo más justo. Innovación en la propuesta de acción adaptada
            a las realidades culturales, sociales y económicas de los entornos más cercanos.
          </p>
          <br></br>
          <br></br>
          <p>
            <b>Actuamos localmente</b> conociendo la fuerza del impacto global y la necesidad de abordar en niños, niñas y
            jóvenes de 6 a 21 años la educación en valores, la educación para la paz y el desarrollo, la educación para la salud,
            la educación para la igualdad de oportunidades y la igualdad de género, la integración y la inserción laboral de los y
            las jóvenes, la educación ambiental, la educación en el consumo responsable y en el uso adecuado de las nuevas tecnologías,
            en la educación vial.
          </p>
          <br></br>
          <br></br>
          <p>
            <b>Aprendemos a través de la participación</b> y de la acción, del trabajo en red, de la implicación y
            el compromiso de más de 8.000 voluntarios y voluntarias, de la vida en la naturaleza y en pequeños grupos y
            de programas progresivos y atractivos que te presentamos a continuación en forma de principales áreas de trabajo.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

        </div>
        <div>
          <div><img class="QH" src={img2}></img></div>
        </div>
      </div>
    </div>
  );
}

export default que_hacen;