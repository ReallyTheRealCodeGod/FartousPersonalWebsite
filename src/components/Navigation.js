import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [filmsMenuOpen, setFilmsMenuOpen] = useState(false);
  const [musicVideoMenuOpen, setMusicVideoMenuOpen] = useState(false);
  const [otherMenuOpen, setOtherMenuOpen] = useState(false);


  return (
    <nav>
      <Link to="/" className="headline">
        <div className="name">Taleb</div>
        <div className="name">Fartous</div>
      </Link>
      <ul>
        <li className="menu-label" onClick={() => setFilmsMenuOpen(!filmsMenuOpen)}>Films</li>
        <ul className={`sub-menu ${filmsMenuOpen ? 'sub-menu-open' : ''}`}>
          <li><Link to="/petanque">Petanque</Link></li>
          <li><Link to="/kramnad">Kramnad</Link></li>
          {/* Other film links */}
        </ul>
        <li className="menu-label" onClick={() => setMusicVideoMenuOpen(!musicVideoMenuOpen)}>Music Videos</li>
        <ul className={`sub-menu ${musicVideoMenuOpen ? 'sub-menu-open' : ''}`}>
          <li><Link to="/rex">REx</Link></li>
          <li><Link to="/madsfisker">Mads Fisker</Link></li>
          {/* Other music video links */}
        </ul>
{/*         
        <li className="menu-label" onClick={() => setOtherMenuOpen(!otherMenuOpen)}>Other</li>
        <ul className={`sub-menu ${otherMenuOpen ? 'sub-menu-open' : ''}`}>
          <li><Link to="/bruxelles">Bruxelles</Link></li>
          <li><Link to="/paris">Paris</Link></li>
          <li><Link to="/portraits">Portraits</Link></li>
        </ul> */}

        {/* <li><Link to="/photography">Photography</Link></li> */}
        <li ><Link to="/info">Info</Link></li>

      </ul>
    </nav>
  );
}
export default Navigation;
