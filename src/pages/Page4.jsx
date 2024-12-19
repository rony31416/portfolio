import React from "react";
import TypewriterEffect from "../components/TypewriterEffect";
const Page4 = () => {
  return (
    <div className="flex h-screen p-4 bg-white">
      {/* Left Section */}
      <div className="h-full w-1/3 relative overflow-hidden bg-black rounded-tl-2xl rounded-bl-2xl">
        <div className="relative w-full h-full flex justify-center items-center bg-black">
          <video
            autoPlay={true}
            src="ghori.mp4"
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
      <div className=" relative w-2/3 flex-wrap justify-start py-20 bg-black rounded-tr-2xl  min-h-[200px] rounded-br-2xl overflow-hidden">
        {/* <h2 className="text-4xl font-semibold text-white mb-4">Hello, I'm Rony Majumder</h2>
         */}
        <div className="text-xl font-bold text-red-800 mb-6 mt-10">
          <TypewriterEffect text="Hello, It's me Rony Majumder!" speed={100} />
        </div>
        <p className="text-white-600 text-xl font-[anzo3] font-semibold mr-20">
          I’m a passionate software developer with interests in{" "}
          <span className="font-bold text-red-400">
            Machine Learning, NLP , MERN stack development
          </span>
          . Currently pursuing my degree at the Institute of Information
          Technology, University of Dhaka, I'm working on exciting research and
          development projects with
          <a
            href="https://barta-research.github.io/"
            className="ml-2 border p-1 border-gray-400 rounded-full text-blue-600 hover:underline inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            BARTA
          </a>
          .
        </p>

        <div className="flex items-center text-3xl space-x-4 bg-gray-100 p-4 rounded-lg mt-12 mr-20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode Logo"
            className="w-12 h-12"
          />
          <div>
            <p className="text-2xl font-[anzo3] font-semibold text-gray-800">
              I have solved various problems on many online judges. To enhance
              my skills in Data Structures and Algorithms, I started coding on
              <a
                href="https://leetcode.com/u/Rony_Majumder/"
                className="text-blue-600 font-semibold hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeetCode
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
