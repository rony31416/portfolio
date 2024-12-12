import React from 'react';

const Page4 = () => {
  return (
    <div className='h-screen p-4 bg-white'>
      <div className='h-full w-full relative overflow-hidden rounded-[16px] bg-black'>
        <video 
          autoPlay 
          src="/src/assets/ghori.mp4" 
          loop 
          muted
          className='absolute bottom-24 left-2 w-[320px] h-[220px] rounded-[8px]'
        ></video>
      </div>
    </div>
  );
};

export default Page4;
