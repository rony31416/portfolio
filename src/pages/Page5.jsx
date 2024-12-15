import React from 'react';

const Page5 = () => {
  return (
    <div className='h-screen relative p-4 bg-white'>
      <div className='h-full w-full bg-black overflow-hidden rounded-[16px]'>
        <video autoPlay='true' loop muted className="h-full w-full object-cover" src="src/assets/project_video.mp4"></video>
      </div>
      <h1 className="font-[anzo2] text-[18vw] absolute uppercase top-40 left-20">Projects</h1>
    </div>
  
  );
};

export default Page5;
