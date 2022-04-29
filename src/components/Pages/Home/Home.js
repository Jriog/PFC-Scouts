import React from 'react';
import './Home.css';
import VideoSection from './Partes/VideoSection/VideoSection';
import Pilares from './Partes/Pilares/Pilares';
import Descripcion from './Partes/Descripcion/Descripcion';

function Home() {
  return (
    <div id='home'>
      <VideoSection/>
      <Descripcion/>
      <Pilares/>
    </div>
  );
}

export default Home;