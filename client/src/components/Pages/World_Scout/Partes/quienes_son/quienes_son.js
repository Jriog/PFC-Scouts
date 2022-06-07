import React from 'react';
import './quienes_son.css';
import foto_QS from './scouts.jpg';

function quienes_son() {
    return (
        <div id='Q_S'>
            <div className='grid grid-cols-5 gap5'>
                <div></div>
                <div className='col-span-2'>
                    <br></br>
                    <h1 id="titulo_movS">MOVIMIENTO SCOUT</h1>
                    <br></br>
                    <p>
                        El movimientosScout, fundado en el año 1907 por Baden Powell en Inglaterra, 
                        es una organización que se basa en un proyecto educativo dirigido a infancia, 
                        adolescencia y juventud con el objetivo de promover su educación integral y su implicación social. 
                        El escultismo trabaja con y para la infancia y la juventud con la ilusión de construir un mundo mejor 
                        a través del liderazgo entre iguales.
                    </p>
                    <br></br>
                    <p>
                        <h3><b>Nuestra misión:</b></h3>
                        Contribuir a la educación y desarrollo de las personas, especialmente durante la niñez, la adolescencia y la juventud, 
                        a través de un sistema de valores basado en la Promesa y la Ley Scout, para ayudar a construir un mundo mejor. 
                        También queremos que las personas crezcan con capacidades que les permitan desarrollarse 
                        como adultos con un amplio nivel de autonomía y liderazgo, para contribuir a crear un mundo más justo, equitativo y feliz.
                    </p>
                    <br></br>
                    <ul>
                        <li type='disc'>involucrándolos a lo largo de sus años formativos, en un proceso de educación no formal.</li>
                        <li type='disc'>utilizando un método específico que haga de cada Scout, el principal agente de su desarrollo como persona autosuficiente, solidaria, responsable y comprometida.</li>
                        <li type='disc'>ayudándoles a establecer un sistema de valores basado en los principios espirituales, sociales y personales expresados ​​en la Promesa y la Ley Scout.</li>
                        <li type='disc'>fomentar la participación social, la implicación y la cooperación en las acciones de voluntariado.</li>
                    </ul>
                    
                </div>

                <div>
                    <div><img class="QS" src={foto_QS}></img></div>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    );
}

export default quienes_son;