import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [openSubMenu, setOpenSubMenu] = useState(null); // State to track the currently open submenu

  // Function to handle submenu click
  const handleSubMenuClick = (menu) => {
    if (openSubMenu === menu) {
      setOpenSubMenu(null); // Close the clicked submenu if it's already open
    } else {
      if (openSubMenu) {
        setOpenSubMenu(null); // Close the previously open submenu
        setTimeout(() => setOpenSubMenu(menu), 300); // Open the new submenu after a delay
      } else {
        setOpenSubMenu(menu); // Open the clicked submenu
      }
    }
  };

  // Function to handle "Info" button click
  const handleInfoClick = () => {
    setOpenSubMenu(null); // Close any open submenu when "Info" button is clicked
  };

  return (
    <nav>
      <Link to="/" className="headline">
        <div className="name">Taleb</div>
        <div className="name">Fartous</div>
      </Link>
      <ul>
        <li className="menu-label" onClick={() => handleSubMenuClick('filmsMenu')}>Films</li>
        <ul className={`sub-menu ${openSubMenu === 'filmsMenu' ? 'sub-menu-open' : ''}`}>
          <li><Link to="/petanque">Petanque</Link></li>
          <li><Link to="/kramnad">Kramnad</Link></li>
          {/* Other film links */}
        </ul>
        <li className="menu-label" onClick={() => handleSubMenuClick('musicVideoMenu')}>Music Videos</li>
        <ul className={`sub-menu ${openSubMenu === 'musicVideoMenu' ? 'sub-menu-open' : ''}`}>
          <li><Link to="/rex">REx</Link></li>
          <li><Link to="/madsfisker">Mads Fisker</Link></li>
          {/* Other music video links */}
        </ul>
        <li ><Link to="/info" onClick={handleInfoClick}>Info</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
