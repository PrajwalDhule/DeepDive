import React, { useEffect, useState } from "react";
import item1 from "../assets/underwater-items/item_1.png";
import tuna from "../assets/fishes/tuna.png";
import fish1 from "../assets/fishes/fish1.png";
import fish2 from "../assets/fishes/fish2.png";
import fish3 from "../assets/fishes/fish3.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Atlantic = () => {
  const [stage, setStage] = useState(0);

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

    // gsap.to(".item1", {
    //   scrollTrigger: {
    //     trigger: ".atlantic-body",
    //     scrub: true,
    //     start: "top top",
    //     end: "+=500",
    //   },
    //   scale: 3,
    //   x: -300,
    //   y: 200,
    //   ease: "none",
    //   duration: 3,
    // });
  }, []);

  const moveAhead = () => {
    setStage(stage + 1);
    if (stage == 1) {
      document.getElementById("item1").style.transform =
        "translate(-300px, 200px) scale(2)";
      document.getElementById("item1").style.opacity = "0";
      document.getElementById("fish1").style.opacity = "1";
      document.getElementById("fish2").style.opacity = "1";
      document.getElementById("fish3").style.opacity = "1";
      document.getElementById("info").style.opacity = "1";
    }
  };

  //   const info = (no) =>{

  //   }

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
      <button
        onClick={() => {
          moveAhead();
        }}
      >
        Move ahead
      </button>
      <img className="item1" id="item1" src={item1}></img>
      <img
        // onClick={() => {
        //   info(3);
        // }}
        className="fish2"
        id="fish2"
        src={fish2}
      ></img>
      <img
        // onClick={() => {
        //   info(2);
        // }}
        className="fish3"
        id="fish3"
        src={fish3}
      ></img>
      <img
        // onClick={() => {
        //   info(1);
        // }}
        className="fish1"
        id="fish1"
        src={fish1}
      ></img>
      <div className="info" id="info">
        <p className="info1">
          The European eel (Anguilla anguilla)[3] is a species of eel, a
          snake-like, catadromous fish. They are normally around 60–80 cm
          (2.0–2.6 ft) and rarely reach more than 1 m (3 ft 3 in), but can reach
          a length of up to 1.5 m (4 ft 11 in) in exceptional cases. Eels have
          been important sources of food both as adults (including jellied eels
          of East London) and as glass eels. Glass-eel fishing using basket
          traps has been of significant economic value in many river estuaries
          on the western seaboard of Europe.
        </p>
        <p className="info2">
          The great hammerhead was first described as Zygaena mokarran in 1837
          by German naturalist Eduard Rüppell. The name was later changed to the
          current Sphyrna mokarran.[3] For many years, though, the valid
          scientific name for the great hammerhead was thought to be Sphyrna
          tudes, which was coined in 1822 by Achille Valenciennes. In 1950,
          Enrico Tortonese determined that the specimens illustrated by
          Valenciennes were in fact smalleye hammerheads, to which the name S.
          tudes then applied. As the next-most senior synonym, Sphyrna mokarran
          became the great hammerhead's valid name. The lectotype for this
          species is a 2.5-m-long (8.2 ft) male from the Red Sea.[4]
        </p>
        <p className="info3">
          The smalltooth sawfish (Pristis pectinata) is a species of sawfish in
          the family Pristidae. It is found in shallow tropical and subtropical
          waters in coastal and estuarine parts of the Atlantic.[1][3] Reports
          from elsewhere are now believed to be misidentifications of other
          species of sawfish.[1][4] It is a critically endangered species that
          has disappeared from much of its historical range.[1]
        </p>
      </div>
    </div>
  );
};

export default Atlantic;
