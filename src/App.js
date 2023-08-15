import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation'; // Import the Navigation component
import Photography from './pages/Photography';
import Info from './pages/Info';
import Bruxelles from './pages/Other/Bruxelles';
import Paris from './pages/Other/Paris';
import Portraits from './pages/Other/Portraits';
import Madsfisker from './pages/MusicVideo/Madsfisker';
import REx from './pages/MusicVideo/REx';
import Petanque from './pages/Films/Petanque';
import Kramnad from './pages/Films/Kramnad';


function App() {
  return (
    <Router>
      <Navigation /> {/* Include the Navigation component here */}
    
      {/* Her kan man ændre de links man allerede har på siden og tilføje nye */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
      
        <Route path="/kramnad" element={<Kramnad />}></Route>
        <Route path="/petanque" element={<Petanque />}></Route>
        <Route path="/info" element={<Info />} />
        <Route path="/bruxelles" element={<Bruxelles />}></Route>
        <Route path="/paris" element={<Paris />}></Route>
        <Route path="/portraits" element={<Portraits />}></Route>
        <Route path="/rex" element={<REx />}></Route>
        <Route path="/madsfisker" element={<Madsfisker />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
