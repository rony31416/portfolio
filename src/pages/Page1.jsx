import React, { useRef, useState, useEffect } from "react";
import Page1Bottom from "../components/Page1Bottom";
import gsap from "gsap";
import TiltText from "../components/TiltText";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) /60
    );
    setYVal(
      -(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 20
    );
  };

  useEffect(() => {
    if (tiltRef.current) {
      gsap.to(tiltRef.current, {
        rotateX: yVal,
        rotateY: xVal,
        duration:2,
        transformPerspective: 400,
        ease : 'elastic.out(1,0.3)'
      });
    }
  }, [xVal, yVal]);

  return (
    <div
      onMouseMove={mouseMoving}
      className="h-screen px-4 py-4 bg-white"
    >
      <div
        id="page1-in"
        className="relative h-full pl-20 py-5 w-full shadow-xl shadow-gray-700 bg-custom-image bg-cover bg-center rounded-3xl"
      >
        <img
          className="h-24"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
          alt=""
        />
        <TiltText abc={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
