import React from "react";

const TiltText = (props) => {
  return (
    <div id="tiltDiv" ref={props.abc} className="mt-32">
      <h1 className="ml-2 text-[2.4vw] leading-[3vw] uppercase font-[anzo1]">
        I am a <span className="text-blue-600">Software Engineering</span>
      </h1>
      <h1 className="text-[7.8vw] leading-[7vw] font-[anzo1]">STUDENT</h1>
      <h1 className="ml-2 text-[2.4vw] leading-[2vw] uppercase font-[anzo1]">
        At IITDU
      </h1>
    </div>
  );
};

export default TiltText;
