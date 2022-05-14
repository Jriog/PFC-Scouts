import React from 'react';
import './Home.css';
import VideoSection from './Partes/VideoSection/VideoSection';
import Pilares from './Partes/Pilares/Pilares';
import Descripcion from './Partes/Descripcion/Descripcion';
import Redes from './Partes/RRSS/Redes';

function Home() {
  return (
    <div id='home'>
      <VideoSection/>
      <Descripcion/>
      <Pilares/>
      <Redes/>
    </div>
  );
}

export default Home;