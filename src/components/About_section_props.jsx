import React from "react";
function About_section_props(props) {
  return (
    <>
      <div class="image two">
        <h3>{props.title}</h3>
        <div class="details-window down">
        <h6>{props.year}</h6>
        <p>{props.para}</p>
      </div>
      </div>
    </>
  );
}
export default About_section_props;
