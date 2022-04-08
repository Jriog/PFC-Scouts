import React from 'react';
import video from './rain.mp4';
import './VideoSection.css';

function Video() {
    
  return (
    <div id='myVideo'>
        <video className='videoTag' autoPlay loop muted>
    <source src={video} type='video/mp4' />
</video>
    </div>
  );
}

export default Video;
