// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (sectionId) => {
    if (location.pathname !== "/") {
      // jika masih di halaman lain → pergi ke home dulu
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      // jika sudah di home → langsung scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar-container">

        <div className="logo-container" onClick={() => navigate("/")}>
          <img src="./img/Logo Agensi.png" alt="Agency Logo" className="logo"/>
          <div className="logo-text">Boejank VisionLab</div>
        </div>

        <ul className="menu">
          <li><button onClick={() => goToSection("home")}>Home</button></li>
          <li><button onClick={() => goToSection("about")}>About</button></li>
          <li><button onClick={() => goToSection("services")}>Services</button></li>
          <li><button onClick={() => goToSection("portfolio")}>Portfolio</button></li>
          <li><button onClick={() => goToSection("blog")}>Blog</button></li>
          <li><button onClick={() => goToSection("contact")}>Contact</button></li>
        </ul>

        <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer">
          <img src="./img/wa.png" alt="WhatsApp" className="wa-btn"/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
