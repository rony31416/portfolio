import React from 'react';

const Page4 = () => {
  return (
    <div className="flex h-screen p-4 bg-white">
      {/* Left Section */}
      <div className="h-full w-1/3 relative overflow-hidden bg-black  bg-black rounded-tl-2xl rounded-bl-2xl">
        <div className="relative w-full h-full flex justify-center items-center bg-black">
          <video
            autoPlay
            src="/src/assets/ghori.mp4"
            loop
            muted
            className="absolute bottom-24 left-2 w-[320px] h-[220px] rounded-[8px]"
          ></video>
          <h1 className="uppercase font-[anzo1] text-6xl absolute left-14 top-24 text-white">
            Projects
          </h1>
        </div>
      </div>

      {/* Right Section with Cards */}
      <div className="w-2/3 h-full flex flex-wrap justify-start gap-x-5 gap-y-4 py-16 bg-black rounded-tr-2xl rounded-br-2xl">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="w-[26vw] h-40 bg-white border-2 text-black border-gray-300 rounded-lg shadow-lg flex justify-center items-center text-xl text-center"
          >
            Card {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;
