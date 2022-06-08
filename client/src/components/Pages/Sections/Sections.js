import React from "react";
import "./Sections.css";
import castores from "./colonia.jpg";
import lobatos from "./manada.jpg";
import scouts from "./scouts.jpg";
import escultas from "./esculta.jpg";
import rovers from "./clan.jpg";
import scouters from "./scouters.jpg";

import { useTranslation } from 'react-i18next';
import '../../../i18n.js';

function Sections() {
  return (
    <div id="sections">
      <br></br>
      <br></br>
      <br></br>
      <div id="main_sections">
        <div className="grid grid-cols-5">
          <div></div>
          <div className="col-span-2">
            <a id="tittle_part">SECCIONES</a>
            <br></br>
            <br></br>
            <p>
              <b>Grupos Locales:</b> una forma de organizarnos es a través de
              Grupos Scouts, que pertenecen a un barrio o localidad. Los grupos
              se componen de varias secciones según edad.
            </p>
            <p>
              <b>Reuniones:</b> Durante el año escolar los grupos se reúnen los
              fines de semana. Se organizan acampadas de fin de semana y en
              verano campamentos de dos semanas.
            </p>
          </div>
          <div>
            <img src=""></img>
          </div>
        </div>
        <br></br>
        <div className="grid grid-cols-5  gap-5">
          <div></div>
          <div className="grid grid-cols-3 col-span-3 seccion">
            <div id="colonia">
              <br></br>
              <br></br>
              <br></br>
              <div className="foto_sections">
                <div>
                  <img class="imgs_sections" src={castores}></img>
                </div>
              </div>
              <div id="t_colonia">
                <button className="tittle_section">Colonia</button>
              </div>
              <br></br>
              <div>
                <b className="subtitle">
                  La Colonia de castores son los niños y niñas de 6 a 8 años. Es la
                  edad de la máxima ilusión por descubrirlo todo.
                </b>
              </div>
            </div>
            <div className="col-span-2 texto_sections">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p>Es también la<strong> primera vez que salen de casa y comienzan a acercarse a los demás.</strong> Contemplan con curiosidad todo lo que les rodea, desarrollando la creatividad.</p>
              <p><strong>Los castores se organizan en “Colonias” donde aprenden a vivir en grupo y a participar activamente de las actividades</strong> junto a otros de su misma edad. El lema “Compartir” fomenta la igualdad y la solidaridad entre ellos.</p>
              <p><strong>A través de juegos y canciones van desarrollando rutinas y haciéndose responsables de sus acciones.</strong> El juego desarrolla la imaginación y la pone al alcance del adulto para hablar así el lenguaje del niño y educarle en diferentes áreas y responsabilidades.</p>
              <p>En esta edad es fundamental que vayan adquiriendo responsabilidades, tanto personales como colectivas.</p>
              <p>Con las excursiones, campamentos y visitas educativas se consigue que el niño vaya poco a poco descubriendo el mundo que lo rodea, compartiendo esas experiencias no solo con los adultos sino con otros de su misma edad, y desarrollando interés temprano en áreas que le gustan.</p>

            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="grid grid-cols-5  gap-5">
          <div></div>
          <div className="grid grid-cols-3 col-span-3 seccion">
            <div id="manada">
              <br></br>
              <br></br>
              <div className="foto_sections">
                <div>
                  <img class="imgs_sections" src={lobatos}></img>
                </div>
              </div>
              <div id="t_manada">
                <button className="tittle_section">Manada</button>
              </div>
              <br></br>
              <div>
                <b className="subtitle">
                  Tras su paso por la Colonia y al cumplir los 8 años, niños y niñas
                  entran a formar parte de la Manada de Lobatos.
                </b>
              </div>
            </div>

            <div className="col-span-2 texto_sections">
              <br></br>
              <br></br>
              <br></br>
              <p><strong>Su imaginación está al servicio de una incesante actividad y del juego, su medio para aprender.</strong> Su compromiso es “Haremos lo mejor”. De nuevo es el desarrollo de la imaginación la que permite al educador hablar un lenguaje accesible para el niño.</p>
              <p><strong>En esta etapa los niños y niñas aprenden a convivir en pequeños grupos de seis, llamados “seisenas”</strong>, en las que se reparten responsabilidades y aprenden a trabajar juntos, desplegando sus hábitos sociales y responsabilizándose de su tarea.</p>
              <p><strong>A través del juego, el niño aprende a quererse y respetarse, y a querer y respetar a los demás.</strong> Es a través del juego como va adquiriendo también sus propios valores personales que le acompañarán toda su vida.</p>
              <p>A través de talleres se inician en destrezas y habilidades, y a través de excursiones y campamentos, a desenvolverse por sí mismos de manera cada vez más autónoma.</p>
              <p>Los niños y niñas de una Manada de Lobatos se inician en el Gran Juego de la Vida con la ilusión de crecer sanos, fuertes, capaces de superarse y con ganas de descubrir el mundo.</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="grid grid-cols-5  gap-5">
          <div></div>
          <div className="grid grid-cols-3 col-span-3 seccion">
            <div id="Scouts">
              <br></br>
              <br></br>
              <br></br>
              <div className="foto_sections">
                <div>
                  <img class="imgs_sections" src={scouts}></img>
                </div>
              </div>
              <div>
                <button className="tittle_section">Scouts</button>
              </div>
              <br></br>
              <div>
                <b className="subtitle">Al alcanzar los once años llega el momento de entrar a formar parte de la Sección Scout.</b>
              </div>
            </div>
            <div className="col-span-2 texto_sections">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p>Es el tiempo de la afirmación de uno mismo; el deseo de aventura se hace más patente, se desarrolla el carácter, las actitudes y la capacidad de vivir en grupo, enriqueciéndose personalmente.</p>
              <p><strong>En la Sección Scout se trabaja en Patrullas, donde se potencia el compromiso personal.</strong> Eligen sus propios líderes y programan las actividades, con apoyo de sus educadores. Los chicos y chicas adquieren así sus propias responsabilidades y aprenden a valorar el trabajo en equipo.</p>
              <p>La imaginación deja paso a la sed de aventuras. El contacto directo con la Naturaleza y las destrezas para desenvolverse en el medio natural les permiten ir más allá en la formación de sí mismos y de su personalidad.</p>
              <p><strong>A través de las “Especialidades”, los chicos aprenden destrezas individuales en áreas que más les motivan</strong>, abriendo así el camino de su formación profesional y de sus aficiones.</p>
              <p>Aprenden a tomar decisiones por sí mismos y colectivamente. Hacen sus actividades en contacto con la Naturaleza y comienzan a tomar conciencia del servicio a los demás. Aspiran a estar “Siempre listos”.</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="grid grid-cols-5  gap-5">
          <div></div>
          <div className="grid grid-cols-3 col-span-3 seccion">
            <div id="Esculta">
              <br></br>
              <br></br>
              <br></br>
              <div className="foto_sections">
                <div>
                  <img class="imgs_sections" src={escultas}></img>
                </div>
              </div>
              <div>
                <button className="tittle_section">Esculta</button>
              </div>
              <br></br>
              <div>
                <b className="subtitle">Cumplidos los 14 años, los chicos y chicas comienzan a trabajar en la Unidad Esculta.</b>
              </div>
            </div>
            <div className="col-span-2 texto_sections">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p>Este es un momento crucial para las ideas, los interrogantes y las ambiciones. Los chicos y las chicas empiezan a perfilar su personalidad definitiva.</p>
              <br></br>
              <p><strong>El grupo cobra enorme importancia y se hacen hombres y mujeres activos.</strong> No aceptan el ocio pasivo y dirigido que se oferta a los jóvenes. Elaboran sus propios proyectos, abiertos al servicio comunitario, se abren a la sociedad y afianzan su pertenencia y su responsabilidad ciudadana.</p>
              <p>Conciben sus propios “proyectos de cambio”. Son ellos y ellas los verdaderos protagonistas de su futuro. Conciben la “Empresa o Proyecto” desde la idea hasta la ejecución, con la mera supervisión del educador adulto. Se responsabilizan de sus acciones y se impulsan en su propia motivación.</p>
              <br></br>
              <p>Empiezan a plantearse su formación profesional y a fijarse retos. Se hacen conscientes de que los estudios son lo más importante de sus vidas en este momento, sin dejar de lado también sus aspiraciones sociales y sus ganas de divertirse de forma saludable. El cuidado de la salud cobra una gran importancia en esta etapa para convertirse en un adulto sano.</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="grid grid-cols-5  gap-5">
          <div></div>
          <div className="grid grid-cols-3 col-span-3 seccion">
            <div id="clan">
              <br></br>
              <br></br>
              <br></br>
              <div className="foto_sections">
                <div>
                  <img class="imgs_sections" src={rovers}></img>
                </div>
              </div>
              <div>
                <button className="tittle_section">Clan</button>
              </div>
              <br></br>
              <div>
                <b className="subtitle">La última etapa de la educación scout es el Clan Rover formado por jóvenes a partir de 17 años.</b>
              </div>
            </div>
            <div className="col-span-2 texto_sections">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p>Ser Rover es vivir intensamente cada paso, tomar las riendas y hacer un proyecto de su propia vida, empeñarse en cambiar el mundo y, sobre todo, creer que es posible.</p>
              <p>Se <strong>comprometen colectiva e individualmente en acciones de cambio</strong> y se esfuerzan por crecer al tiempo como persona. Elaboran sus propios proyectos personales, se marcan metas y se ayudan mutuamente a madurar y crecer como adultos comprometidos.</p>
              <p>Colectivamente, se esfuerzan por hacer suya la máxima scout de “tratar de dejar el mundo en mejores condiciones de cómo lo encontramos”. S<strong>on jóvenes comprometidos socialmente, dinamizan, conciencian y ayudan a los demás con la esperanza de cambiar el mundo.</strong></p>
              <p>Los encontraréis trabajando en el barrio, o dinamizando a sus compañeros de clase o de trabajo aunque nadie sepa que son “scouts”. Su lema es “servir”.</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="grid grid-cols-5  gap-5">
          <div></div>
          <div className="grid grid-cols-3 col-span-3 seccion">
            <div id="Scouters">
              <br></br>
              <br></br>
              <br></br>
              <div className="foto_sections">
                <div>
                  <img class="imgs_sections" src={scouters}></img>
                </div>
              </div>
              <div>
                <button className="tittle_section">Scouters</button>
              </div>
              <br></br>
              <div>
                <b className="subtitle">Nunca es tarde para pertenecer a un Grupo Scout.</b>
              </div>
            </div>
            <div className="col-span-2 texto_sections">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p>En todas las secciones se cuenta con <strong>voluntarios y voluntarias, monitores/as de Tiempo Libre, educadores/as, médicos, transportistas, cocineros…</strong> Si quieres compartir tu tiempo y experiencia en un grupo scout, ponte en contacto con nosotros. Te ofrecemos la posibilidad de entrar en un Grupo Scout y colaborar con las actividades y campañas que se realizan durante el año, así como en los campamentos de fines de semana y de verano.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
