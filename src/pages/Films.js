// Films.js
import React from 'react';
import './Films.css';

function Films() {
  return (
    <div className="video-container">
      <iframe
        src="https://player.vimeo.com/video/185882642?autoplay=1" // Replace with your Vimeo video ID
        width="640"
        height="360"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo Video"
      ></iframe>
    </div>
  );
}

export default Films;
