import gsap from "gsap";
import React, { useEffect } from "react";

const Page1Bottom = () => {
  useEffect(() => {
    gsap.to("#banner img", {
      rotate: 360,
      duration: 2,
      repeat: -1,
      ease: "linear",
    });
  }, []); // Empty dependency array to ensure animation runs only once

  return (
    <div className="absolute left-0 px-24 pb-14 flex items-end justify-between bottom-0 w-full">
      <div>
        <h2 className="text-xl font-[anzo4]">
          {" "}
          WEB DEVELOPMENT | NLP
        </h2>
        <h3 className="text-xl font-[anzo5] text-gray-400">
          {" "}
          AI & ML ENTHUSIAST
        </h3>
      </div>
      <div id="banner"  className="fixed bottom-10 right-10 flex flex-col items-center" >
        <img
          className="mb-10"
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png"
          alt=""
        />
        <img 
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Page1Bottom;
