import React from 'react';
import rain from './rain.mp4';
import memoria from './memoria17_18.mp4';
import './VideoSection.css';

function Video() {
    
  return (
    <div id='myVideo'>
        <video className='videoTag' autoPlay loop muted>
            <source src={rain} type='video/mp4' />
        </video>
    </div>
  );
}

export default Video;