import React, { useEffect } from "react";
import item1 from "../assets/underwater-items/item_1.png";
import tuna from "../assets/fishes/tuna.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Atlantic = () => {
  useEffect(() => {
    let wHeight = window.innerHeight;
    let wWidth = window.innerWidth;
    let noOfTunas = document.getElementsByClassName("tuna").length;
    console.log(wHeight, wWidth);
    let tl = gsap.timeline();
    tl.from(".tuna", { rotation: 35 });

    const moveFish = (noOfTunas) => {
      for (let i = 0; i < noOfTunas; i++) {
        if (i % 2 == 1) {
          gsap.from(`#tuna${i + 1}`, {
            scale: 1.5,
            x: -50 * noOfTunas + i * 50 + 2000,
            y: -50 * noOfTunas + (i % 3) * 50 - 25,
          });
        }
        gsap.from(`#tuna${i + 1}`, {
          x: -50 * noOfTunas + i * 50,
          y: -50 * noOfTunas + (i % 3) * 50,
        });
      }
      for (let i = 0; i < noOfTunas; i++) {
        gsap.to(`#tuna${i + 1}`, {
          x: wWidth + (50 * noOfTunas + i * 50),
          y: wHeight + (50 * noOfTunas + (i % 3) * 50),
          //   x: "100vw",
          //   y: "100vh",
          duration: 20,
          ease: "none",
        });
      }
      //   tl.from("#tuna1", {
      //     x: -50,
      //     y: -50,
      //   })
      //     .from("#tuna2", {
      //       x: -25,
      //       y: -100,
      //       scale: 1.2,
      //     })
      //     .from("#tuna3", {
      //       x: 0,
      //       y: -67,
      //     })
      //     .to(".tuna", { rotation: 35 })
      //     .to(".tuna", {
      //       x: "100vw",
      //       y: "100vh",
      //       duration: 20,
      //       ease: "none",
      //     });
    };
    moveFish(noOfTunas);

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".item1", {
      scrollTrigger: {
        trigger: ".atlantic-body",
        scrub: true,
        start: "top top",
        end: "+=500",
      },
      scale: 3,
      x: -300,
      y: 200,
      ease: "none",
      duration: 3,
    });
  }, []);

  return (
    <div className="atlantic-body">
      {/* {() => {
        for (let i = 0; i < 10; i++) {
          return <img className="tuna" id={`tuna${i + 1}`} src={tuna}></img>;
        }
      }} */}
      <img className="tuna" id="tuna1" src={tuna}></img>
      <img className="tuna" id="tuna2" src={tuna}></img>
      <img className="tuna" id="tuna3" src={tuna}></img>
      <img className="tuna" id="tuna4" src={tuna}></img>
      <img className="tuna" id="tuna5" src={tuna}></img>
      <img className="tuna" id="tuna6" src={tuna}></img>
      <img className="tuna" id="tuna7" src={tuna}></img>
      <img className="tuna" id="tuna8" src={tuna}></img>
      <img className="tuna" id="tuna9" src={tuna}></img>
      <img className="item1" src={item1}></img>
    </div>
  );
};

export default Atlantic;
