import React from 'react';
import './Sections.css';
import foto from './flor_de_lis.png'

function Sections() {
  return (
    <div className='scrollmenu'>
     <div id='manada' class="h-56 grid grid-cols-5 gap-4 content-center ...">
       <div></div>
       <div className='textosections'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</div>
       <div></div>
       <div className='logodiv'><img src={foto} alt="flor de lis" className='img'></img></div>
       <div></div>
     </div>
     <div id='tropa' class="h-56 grid grid-cols-5 gap-4 content-center ...">
       <div></div>
       <div className='textosections'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</div>
       <div></div>
       <div className='logodiv'><img src={foto} alt="flor de lis" className='img'></img></div>
       <div></div>
     </div>
     <div id='esculta' class="h-56 grid grid-cols-5 gap-4 content-center ...">
       <div></div>
       <div className='textosections'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</div>
       <div></div>
       <div className='logodiv'><img src={foto} alt="flor de lis" className='img'></img></div>
       <div></div>
     </div>
     <div id='clan' class="h-56 grid grid-cols-5 gap-4 content-center ...">
       <div></div>
       <div className='textosections'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</div>
       <div></div>
       <div className='logodiv'><img src={foto} alt="flor de lis" className='img'></img></div>
       <div></div>
     </div>
     <div id='scouter' class="h-56 grid grid-cols-5 gap-4 content-center ...">
       <div></div>
       <div className='textosections'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</div>
       <div></div>
       <div className='logodiv'><img src={foto} alt="flor de lis" className='img'></img></div>
       <div></div>
     </div>
    </div>
  );
}

export default Sections;