import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Header = () => {
  return (
    <div className="fixed flex items-center justify-end w-full z-10 py-16 px-8">
      <button className="fixed right-20 top-10.5 bg-black border text-2xl font-[anzo4] px-4 py-2 hover:bg-gray-500 rounded-full">
        Hire me
      </button>
      <i className="fixed text-gray-800 ri-more-2-fill text-4xl"></i>
    </div>
  );
};

export default Header;
