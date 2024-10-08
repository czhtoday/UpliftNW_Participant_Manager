import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import AboutModal from '../components/AboutModal';
import '../App.css'; 


function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);
  
  return (
    <div className="HomePage">
      <header>
        <img src="/Uplift-logo.svg" alt="Logo" className="Logo" />
        <h1 className='title-1'>Uplift NW</h1>
        <h2 className='title-1'>PARTICIPANT MANAGEMENT SYSTEM</h2>
      </header>
      <nav>
        <Link to="/add-participant" className="button">ADD NEW PARTICIPANT</Link>
        <Link to="/manage-participants" className="button">MANAGE PARTICIPANTS</Link>
        <AboutModal />
      </nav>
    </div>
  );
}

export default HomePage;
