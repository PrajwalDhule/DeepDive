import React from "react";
import { useEffect, useState } from "react";

function Plankton() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <section className="plankton-container">
      <div
        style={{ left: cursorX + "px", top: cursorY + "px" }}
        className="cursor"
      ></div>
      <article className="info">
        <div className="info-img"></div>
        <div className="info-text"></div>
      </article>
    </section>
  );
}

export default Plankton;
