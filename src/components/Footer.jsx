import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container-fluid" id="contact">
        <div className="container">
          <div className="row footer-row">
            <div className="col-md-4 col-12">
              <div className="footer-left">
                <h1>Footer</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore neque, fuga nihil eveniet doloremque a dicta
                  blanditiis deleniti earum, quos dolore quae nulla inventore
                  culpa officiis architecto. At, a labore!
                </p>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <div className="footer-center">
                <h1>Links</h1>
                <a href="#home"><h6>Home</h6></a>
                <a href="#about"><h6>About Us</h6></a>
                <a href="#projects"><h6>Projects</h6></a>
                <a href="#contact"><h6>Contact Us</h6></a>
              </div>
            </div>
            <div className="col-md-4 col-8">
              <div className=" footer-center footer-right">
                <h1>Contact Us</h1>
                <h6>Address</h6>
                <p><span className="pe-2"><FaPhone size = '14px' color="#DCCA87"/></span>Islambaad Pakistan</p>
                <h6>Follow Us On</h6>
                <div className="icons">
                <a href="https://github.com/SabaMirza5"><span className="pe-4"><FaGithub size = '35px' color="#DCCA87" className="Fa"/></span></a>
                <a href="https://www.instagram.com/saba_mirza309/"><span className="pe-4"><FaTwitter size = '35px' color="#DCCA87" className="Fa"/></span></a>
                <a href="https://www.linkedin.com/in/saba-mirza-54787a21b/"><span className="pe-4"><FaLinkedin size = '35px' color="#DCCA87" className="Fa"/></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-bottom">
        <div className="container">
        <div className="row">
            <div className="col-md-12">
              <div className="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
