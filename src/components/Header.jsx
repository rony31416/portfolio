
// import React from 'react';
// import 'remixicon/fonts/remixicon.css';

// const Header = () => {
//   return (
//     <div className="fixed flex items-center justify-end w-full z-10 py-10 px-8">
//       <a
//         href="https://www.linkedin.com/in/rony-majumder-7064332a3/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <button className="fixed right-20 top-10.5 bg-black border text-2xl font-[anzo4] px-4 py-2 hover:bg-gray-500 rounded-full">
//           Hire me
//         </button>
//       </a>
//       <i className="fixed text-gray-800 ri-layout-masonry-fill text-4xl right-8 top-16"></i>
     
//     </div>
//   );
// };

// export default Header;




import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="fixed flex items-center justify-end w-full z-10 py-10 px-8">
      <a
        href="https://www.linkedin.com/in/rony-majumder-7064332a3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="fixed right-20 top-10.5 bg-black border text-2xl font-[anzo4] px-4 py-2 hover:bg-gray-500 rounded-full">
          Hire me
        </button>
      </a>
      <i
        className="fixed text-gray-800 ri-layout-masonry-fill text-4xl right-8 top-16 cursor-pointer"
        onClick={toggleSidebar}
      ></i>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-64 bg-gray-800 shadow-lg z-20 p-4 rounded-lg pt-20 pr-20 mr-10 mt-16">
          <button
            className="absolute top-4 right-4 text-4xl text-white ri-close-circle-fill"
            onClick={toggleSidebar}
          >
         
          </button>
          <ul className="space-y-4">
            <li className="flex items-center">
              <i className="ri-file-text-line text-xl mr-2"></i>
              <a
                href="https://drive.google.com/file/d/1NrssJJVQAVAPMFqG16ggU-NVCBSlwLFP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white"
              >
                See My Resume
              </a>
            </li>
            <li className="flex items-center">
              <i className="ri-github-line text-xl mr-2"></i>
              <a
                href="https://github.com/rony31416"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center">
              <i className="ri-mail-line text-xl mr-2"></i>
              <a
                href="https://www.linkedin.com/in/rony-majumder-7064332a3/"
                className="text-xl text-white"
                target='_blank'
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

