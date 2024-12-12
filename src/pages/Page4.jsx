import React from 'react';

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
            Projects
          </h1>
        </div>
      </div>

      {/* Right Section with Cards */}
      <div className="w-2/3 h-full flex flex-wrap justify-start gap-x-5 gap-y-4 py-16 bg-black rounded-tr-2xl rounded-br-2xl overflow-hidden">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="relative w-[26vw] h-40 bg-white border-2 text-black border-gray-300 rounded-lg shadow-lg flex flex-col justify-between items-center p-4"
          >
            {/* Card Content */}
            <p className="text-xl text-center mb-4">Card {index + 1}</p>
            
            {/* Link Button */}
            <button
              onClick={() => window.location.href = "https://www.example.com"}
              className="absolute bottom-3 right-4 w-14 py-1 bg-gray-600 text-white rounded-[100px] hover:bg-blue-700 transition duration-300"
            >
              Link
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;
