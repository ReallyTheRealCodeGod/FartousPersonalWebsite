import React from 'react';
import './REx.css';

function REx() {
  return (
    <div className="rex-container">
      <iframe
        src="https://www.youtube.com/embed/0o1oJkCd2GA"
        width="640"
        height="360"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>

      <div className="video-description">
        <p><strong>2022, 6 min</strong></p>
        <p>Directed by Taleb Fartous</p>
        <p>Produced by MYRA</p>
        <p>A distant traumatic memory haunts a young man, inevitably leading to his mental breakdown. The short film deals with the topic of inherited trauma: In what ways are unprocessed traumas passed down through generations - biologically, socially and culturally.</p>
      </div>
    </div>
  );
}

export default REx;
