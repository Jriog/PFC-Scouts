import React from 'react';
import './Pilares.css';


function Pilares() {
  return (
    <div id='pilares' class="h-56 grid grid-cols-5 gap-4 content-center ...">
      <div class=""></div>
      <div class="pilar" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
      <div class="pilar">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</div>
      <div class="pilar">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</div>
      <div class=""></div>
    </div>
  );
}

export default Pilares;