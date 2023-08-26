
import React from 'react';
import navbarlogo from '../assets/navbarlogo.png'
// import { FaAngleDown} from "react-icons/fa";
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <div>
<div className="navbar-logo">
  <img src={navbarlogo} alt="logo here" height='50px' width='40px'/>
</div>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#technologies">Technologies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
  
            <div className="logo-section">
              <p className="pt-4">
                
              <a href="https://github.com/SabaMirza5"><span className="pe-4"><FaGithub size = '35px' color="#DCCA87"/></span></a>
              <a href="https://www.linkedin.com/in/saba-mirza-54787a21b/"><span className="pe-4"><FaLinkedin size = '35px' color="#DCCA87"/></span></a>
              <a href="https://www.instagram.com/saba_mirza309/"><span className="pe-4"><FaInstagram size = '35px' color="#DCCA87"/></span> </a>
              </p>
            </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
