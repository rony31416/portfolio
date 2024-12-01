import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from(".rotateText", {
      transform: "rotateX(90deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger:{
        trigger: ".rotateText",
        // markers: true,
        start:"top 100%",
        end: "top -280%",
        scrub: 2,
      }
    });
  });

  return (
    <div id="section2" className="bg-white text-black text-center p-24">
      <h3 className="text-gray-700 text-xl font-[anzo3]">
        © all rights reserved by rony.majumder 2024
      </h3>
      <div className="rotateText mt-28">
        <h1 className="text-[40vw] text-black font-[anzo2]  uppercas   leading-[30vw]  ">
          IMPACTFUL
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] text-black font-[anzo2]  uppercase  leading-[30vw]">
          DDESIGN
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] text-black font-[anzo2]  uppercase  leading-[30vw] ">
          IS THE
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] text-black font-[anzo2]  uppercase  leading-[30vw]">
          DESIGN
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] text-black font-[anzo2]  uppercase  leading-[30vw]">
          THAT
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] text-black font-[anzo2]  uppercase  leading-[30vw]">
          WORKS
        </h1>
      </div>
    </div>
  );
};

export default Page2;
