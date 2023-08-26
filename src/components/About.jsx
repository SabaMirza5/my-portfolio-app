import React from "react";
import web from "../assets/web.png";
import webd from "../assets/webd.png";
// import About_section_props from './About_section_props'
import About_section_props from "./About_section_props.jsx";

function About() {
  return (
    <>
      <div className="container" id="about">
        <div className="row">
          <div className="projects-heading">
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugit natus sit illo distinctio! Iste aliquam, modi totam tempora quas maiores at natus magnam perspiciatis dolorum molestiae dignissimos quo vel.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugit natus sit illo distinctio! Iste aliquam, modi totam tempora quas maiores at natus magnam perspiciatis dolorum molestiae dignissimos quo vel.</p>
          </div>
          <div className=" col-lg-3 col-md-4 col-6 cl1 ">
            <About_section_props
              title="Master"
              year="2016/2018"
              para="From Govt Collage Sheikhupura"/>
          </div>

          <div className=" col-lg-3 col-md-4 col-6 cl2">
            <About_section_props
              title="Master"
              year="2016/2018"
              para="From Govt Collage Sheikhupura"/>
          </div>

          <div className=" col-lg-3 col-md-4 col-6 cl3 mt-4 mt-md-0">
            <About_section_props
              title="Master"
              year="2016/2018"
              para="From Govt Collage Sheikhupura"/>
          </div>

          <div className=" col-lg-3 col-md-4 col-6 cl4 mt-4 mt-md-0">
            <About_section_props
              title="Master"
              year="2016/2018"
              para="From Govt Collage Sheikhupura"/>
          </div>

          
          <div className=" col-lg-3 col-md-4 col-6 cl5 mt-4">
            <About_section_props
              title="Master"
              year="2016/2018"
              para="From Govt Collage Sheikhupura"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default About
