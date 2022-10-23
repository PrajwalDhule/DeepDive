import { React, useState } from "react";
import cloud1 from "../assets/cloud_1.png";
import cloud2 from "../assets/cloud_2.png";
import cloud3 from "../assets/cloud_4.png";

function Landing() {
  const [translate, setTranslate] = useState("0");

  // const setTranslate = (value) => {
  //   // let page = document.getElementsByClassName("landing-body");
  //   let page = document.getElementById("first-body");
  //   page.style.transform = `translateY(${value}vh)`;
  // };

  return (
    <>
      <div id="first-body">
        <div className="landing-body">
          <nav>
            <div className="nav-container">
              <a className="nav-logo">Logo</a>
              <div className="line"></div>
              {/* <div className="nav-items">
            <a href="/">Journeys</a>
            <a href="/">About</a>
            <a href="/">Get Involved</a>
            <a href="/">Share</a>
          </div> */}
            </div>
          </nav>
          <div className="header">
            {/* <img className="cloud1" src={cloud1} alt="" />
        <img className="cloud2" src={cloud2} alt="" />
        <img className="cloud3" src={cloud3} alt="" /> */}
            {/*Content before waves*/}
            <div className="inner-header flex">
              {/*Just the logo.. Don't mind this*/}
              {/* <svg
            version="1.1"
            className="logo"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 500 500"
            xmlSpace="preserve"
          >
            <path
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth={10}
              strokeMiterlimit={10}
              d="M57,283"
            />
            <g>
              <path
                fill="rgb(6, 6, 122)"
                d="M250.4,0.8C112.7,0.8,1,112.4,1,250.2c0,137.7,111.7,249.4,249.4,249.4c137.7,0,249.4-111.7,249.4-249.4
                  C499.8,112.4,388.1,0.8,250.4,0.8z M383.8,326.3c-62,0-101.4-14.1-117.6-46.3c-17.1-34.1-2.3-75.4,13.2-104.1
                  c-22.4,3-38.4,9.2-47.8,18.3c-11.2,10.9-13.6,26.7-16.3,45c-3.1,20.8-6.6,44.4-25.3,62.4c-19.8,19.1-51.6,26.9-100.2,24.6l1.8-39.7		c35.9,1.6,59.7-2.9,70.8-13.6c8.9-8.6,11.1-22.9,13.5-39.6c6.3-42,14.8-99.4,141.4-99.4h41L333,166c-12.6,16-45.4,68.2-31.2,96.2	c9.2,18.3,41.5,25.6,91.2,24.2l1.1,39.8C390.5,326.2,387.1,326.3,383.8,326.3z"
              />
            </g>
          </svg> */}
              <div className="heading">
                <h1>Welcome! </h1>
                <h2>Whoever You Are</h2>
                {/* href="#option-body" */}
                <a
                  onClick={() => {
                    setTranslate("-102.5");
                  }}
                  class="pseudo-partial-border btn"
                >
                  Explore
                </a>
              </div>
            </div>
            {/*Waves Container*/}
            <div
              className="wave-container"
              style={{ transform: `translateY(${translate}vh)` }}
            >
              <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g className="parallax">
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={0}
                    fill="rgb(50, 150, 255)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={0}
                    fill="rgb(0, 115, 255)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={3}
                    fill="rgb(36, 44, 255)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={5}
                    fill="rgb(19, 25, 190)"
                  />
                  {/* <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" /> */}
                </g>
              </svg>
            </div>
            {/*Waves end*/}
          </div>
        </div>
        <div
          id="option-body"
          className=""
          style={{ transform: `translateY(${translate}vh)` }}
        >
          <div className="light-ray"></div>
          <a
            onClick={() => {
              setTranslate("0");
            }}
            className="up"
          >
            up
          </a>
          <div className="options">
            <a href="/atlantic" className="">
              <div>
                <p>1</p>
              </div>
              <p>Atlantic</p>
            </a>
            <a className="">
              <div>
                <p>2</p>
              </div>
              <p>Option 2</p>
            </a>
            <a className="">
              <div>
                <p>3</p>
              </div>
              <p>Option 3</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
