import React from 'react';
import './Madsfisker.css';

function Madsfisker() {
  return (
    <div className="mads-container">
      <iframe
        src="https://player.vimeo.com/video/554714722?autoplay=1" // Replace with your Vimeo video ID
        width="640"
        height="360"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo Video"
      ></iframe>
      <div className="video-description">
        <p><strong>Mads Fisker - Månesyg, 2021, 4 min</strong></p>
        <p>Produced by MYRA</p>
      </div>
    </div>
  );
}

export default Madsfisker;

