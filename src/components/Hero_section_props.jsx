import React from "react";

function Hero_section_props(props) {
  return (
    <>
      <div className="container" id="home">
        <div className="row">
          <div className="col-md-10">
            <div className="main-heading">
              <h1>{props.heading}</h1>
              <p>{props.main_pera}</p>
              <button onClick={() =>window.location ='https://google.com'}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero_section_props;
