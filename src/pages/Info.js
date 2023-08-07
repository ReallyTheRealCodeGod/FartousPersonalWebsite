import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <div className="info-container">
      <h2>Taleb Fartous</h2>
      <p>is a writer and director based in Copenhagen, Denmark.</p>
      <hr />
      <h3>Links:</h3>
      <ul>
        <li><a href="https://www.instagram.com/talebfartous" target="_blank" rel="noreferrer">Instagram</a></li>
        <li><a href="https://www.vimeo.com/talebfartous" target="_blank" rel="noreferrer">Vimeo</a></li>
      </ul>
      <hr />
      <h3>Inquiries:</h3>
      <p><a href="mailto:taleb.fartous@hotmail.com">taleb.fartous@hotmail.com</a></p>
    </div>
  );
};

export default Info;
