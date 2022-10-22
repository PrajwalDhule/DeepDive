import React from "react";

function Waves() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="waves"
      preserveAspectRatio="none"
      viewBox="0 24 150 28"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
        ></path>
      </defs>
      <g className="parallax">
        <use x="48" fill="rgba(59,203,237,0.7)" xlinkHref="#gentle-wave"></use>
        <use
          x="48"
          y="3"
          fill="rgba(59,203,237,0.5)"
          xlinkHref="#gentle-wave"
        ></use>
        <use
          x="48"
          y="5"
          fill="rgba(39,134,180,0.9)"
          xlinkHref="#gentle-wave"
        ></use>
        <use
          x="48"
          y="7"
          fill="rgba(21,99,138,0.7)"
          xlinkHref="#gentle-wave"
        ></use>
      </g>
    </svg>
  );
}

export default Waves;
