import React from "react";
import web from "../assets/web.png";
import webd from "../assets/webd.png";
import Cards_section_props from "./Cards_section_props.jsx";

function Card_main() {
  return (
    <>
      <div className="container" id="projects">
        <div className="row">
          <div className="projects-heading">
            <h1>Projects</h1>
          </div>
          <div className="col-md-4">
            <Cards_section_props
              imgsrc={web}
              title="web development app"
              para="but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software."
              link="https://www.google.com"
            />
          </div>

          <div className="col-md-4">
            <Cards_section_props
              imgsrc={webd}
              title="web development app"
              para="but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software."
              link="https://www.google.com"
            />
          </div>
          <div className="col-md-4">
            <Cards_section_props
              imgsrc={web}
              title="web development app"
              para="but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software."
              link="https://www.google.com"
            />
          </div>
        </div>
        <div className="row mt-5 prj">
        <div className="col-md-4">
            <Cards_section_props
              imgsrc={webd}
              title="web development app"
              para="but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software."
              link="https://www.google.com"
            />
          </div>
          <div className="col-md-4">
            <Cards_section_props
              imgsrc={web}
              title="web development app"
              para="but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software."
              link="https://www.google.com"
            />
          </div>
          <div className="col-md-4">
            <Cards_section_props
              imgsrc={webd}
              title="web development app"
              para="but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software."
              link="https://www.google.com"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card_main


