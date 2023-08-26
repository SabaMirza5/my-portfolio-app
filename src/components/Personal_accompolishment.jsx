
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Personal_accompolishment() {
  const [counterStart, setCounterStart] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterStart(true)}
        onExit={() => setCounterStart(false)}
      >
        <div className="container ">
          <div className="row">
            <div className="project-main-heading">
              <h1>Projects statistics</h1>
            </div>

          
            <div className="col-md-3 col-6">
              <div className="counter text-white count1">
                <p>Happy clients</p>
                <h1 className="value">
                {counterStart && (
                  <CountUp start={0} end={1000} duration={2} delay={0} />)}+
                  </h1>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter text-white count2">
                <p>Done projects</p>
                <h1 className="value">
                {counterStart && (
                  <CountUp start={0} end={950} duration={2} delay={0} />)}+
                  </h1>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter text-white count3">
                <p>Happy clients</p>
                <h1 className="value">
                {counterStart && (
                  <CountUp start={25} end={999} duration={2} delay={0} />)}+
                  </h1>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter text-white count4">
                <p>Saved Trees</p>
                <h1 className="value">
                {counterStart && (
                  <CountUp start={276} end={827} duration={2} delay={0} />)}+
                  </h1>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}

export default Personal_accompolishment;










