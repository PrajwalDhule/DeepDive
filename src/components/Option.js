import React from "react";
import LightEffect from "./Lighteffect";
import "../styles/option.css";
import Angler from "./Anglerfish";
import Octopus from "./Octopus";
import Whale from "./Squid";

function Option() {
  return (
    <>
      <LightEffect />
      <section className="option-container">
        <div className="op-box">
          <h2 className="option-title">Explore the wonders of the Sea</h2>
          <div className="op-choices">
            <div className="coral-choice op-logo">
              <Angler />
            </div>
            <div className="plankton-choice op-logo">
              <Octopus />
            </div>
            <div className="coming-soon op-logo">
              <Whale />
            </div>
          </div>
        </div>
      </section>
      <div id="background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
      </div>
    </>
  );
}

export default Option;
