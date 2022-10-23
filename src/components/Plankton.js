import React from "react";
import { useEffect, useState } from "react";
import Cursor from "./Cursor";

function Plankton() {
  return (
    <section className="plankton-container">
      <Cursor />
      <article className="info">
        <div className="info-img">
          <img src="../../public/images/bp1.jpg" alt="" />
        </div>
        <div className="info-text">
          <p>
            {" "}
            Bioluminescence is light produced by a chemical reaction within a
            living organism. Bioluminescence is a type of chemiluminescence,
            which is simply the term for a chemical reaction where light is
            produced. (Bioluminescence is chemiluminescence that takes place
            inside a living organism.)
          </p>
          <h3>Where to see bioluminescent plankton</h3>
          <p>
            If you want to see the bioluminescent plankton for yourself then
            there are a number of locations throughout the world where they
            regularly appear. Luckily, most of the locations where the plankton
            appear also make good holiday destinations. The Maldives is famous
            for shining white beaches and teeming marine life and almost every
            island is visited by glowing plankton. High season for spotting the
            plankton is mid-summer through to winter but it can appear at any
            time. San Diego is another place where locals and holidaymakers
            report seeing the waves glow as they break on the shore or shine as
            a surfboard cuts through a wake. Other countries that have reported
            sightings of bioluminescent plankton are Australia, Vietnam,
            Thailand, Puerto Rico and Jamaica.
          </p>
        </div>
      </article>
    </section>
  );
}

export default Plankton;
