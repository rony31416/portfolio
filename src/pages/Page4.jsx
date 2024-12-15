import React from "react";
import TypewriterEffect from "../components/TypewriterEffect";
const Page4 = () => {
  return (
    <div className="flex h-screen p-4 bg-white">
      {/* Left Section */}
      <div className="h-full w-1/3 relative overflow-hidden bg-black rounded-tl-2xl rounded-bl-2xl">
        <div className="relative w-full h-full flex justify-center items-center bg-black">
          <video
            autoPlay
            src="/src/assets/ghori.mp4"
            loop
            muted
            className="absolute bottom-24 left-2 w-[320px] h-[220px] rounded-[8px]"
          ></video>
          <h1 className="uppercase font-[anzo1] text-6xl absolute left-14 top-24 text-white">
            About
          </h1>
        </div>
      </div>

      {/* Right Section with Cards */}
      <div className=" relative w-2/3 h-full flex flex-wrap justify-start gap-x-5 gap-y-4 py-16 bg-black rounded-tr-2xl rounded-br-2xl overflow-hidden">
        {/* <h2 className="text-4xl font-semibold text-white mb-4">Hello, I'm Rony Majumder</h2>
         */}
        <div>
          <TypewriterEffect text="Hello, It's me Rony Majumder!" speed={100} />
        </div>
      </div>
    </div>
  );
};

export default Page4;
