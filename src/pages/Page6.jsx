// import React from 'react'
// import "../Style/ProjectSlider.css"
// import 'remixicon/fonts/remixicon.css'
// // import SwiperSliders from '../components/SwiperSliders.jsx'; // Adjust the path as needed

// const Page6 = () => {
//   return (
//     <div>
//       <div className='body '>

//         <section className="main-section">

//           <div className="slider">

//             <div className="slide">

//               <div className="slide-images">
//                 <img src="\src\assets\image\stackoverflow.jpg" alt="" className="slide-bg-image" />
//                 <h1 className="project-name">MiniStackoverflow</h1>
//               </div>

//               <div className="slide-text-content">
//                 <h3 className="slide-caption">Project type</h3>
//                 <p className="slide-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a earum ut libero repudiandae similique atque labore veritatis amet ex.
//                 </p>
//                 <button className="watch-video-btn">Github link</button>
//               </div>
//             </div>



//             <div className="slide">

//               <div className="slide-images">
//                 <img src="\src\assets\image\gomoku ai.jpg" alt="" className="slide-bg-image" />
//                 <h1 className="project-name">Gomoku AI</h1>
//               </div>

//               <div className="slide-text-content">
//                 <h3 className="slide-caption">Project type</h3>
//                 <p className="slide-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a earum ut libero repudiandae similique atque labore veritatis amet ex.
//                 </p>
//                 <button className="watch-video-btn">Github link</button>
//               </div>
//             </div>



//             <div className="slide">

//               <div className="slide-images">
//                 <img src="\src\assets\image\signlanguage.jpg" alt="" className="slide-bg-image" />
//                 <h1 className="project-name">Bangla sign language learning tools</h1>
//               </div>

//               <div className="slide-text-content">
//                 <h3 className="slide-caption">Project type</h3>
//                 <p className="slide-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a earum ut libero repudiandae similique atque labore veritatis amet ex.
//                 </p>
//                 <button className="watch-video-btn">Github link</button>
//               </div>
//             </div>





//           </div>
//           {/* slider left/right arrow navigastion */}

//           <div className='slider-navigation'>
//             <div className="pre-btn ">
//               <i class="ri-arrow-left-s-line"></i> Pre
//             </div>
//             <div className="next-btn">
//               Next<i class="ri-arrow-right-s-line"></i>
//             </div>
//           </div>

//           {/* slider pagination button for each side  */}

//           <div className="slide-pagination">
//             <div className="slide-btn"></div>
//             <div className="slide-btn"></div>
//             <div className="slide-btn"></div>
//             <div className="slide-btn"></div>
//             <div className="slide-btn"></div>
//             <div className="slide-btn"></div>
//             <div className="slide-btn"></div>
//             <div className="slide-btn"></div>
//           </div>


//           {/* slide visibility indicator bar */}

//           <div className="slide-indicator-bars">
//             <div className="indicator-bar"></div>
//             <div className="indicator-bar"></div>
//             <div className="indicator-bar"></div>
//             <div className="indicator-bar"></div>
//             <div className="indicator-bar"></div>
//             <div className="indicator-bar"></div>
//             <div className="indicator-bar"></div>
//             <div className="indicator-bar"></div>
//           </div>


//         </section>

//       </div>
//     </div>
//   )
// }

// export default Page6


import React, { useState, useEffect } from 'react';
import "../Style/ProjectSlider.css";
import 'remixicon/fonts/remixicon.css';

const Page6 = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  
  // Helper function to handle next slide
  const handleNextSlide = () => {
    setSlideNumber(prev => (prev + 1) % 4); // Using 3 as we have 3 slides
  };

  // Helper function to handle previous slide
  const handlePrevSlide = () => {
    setSlideNumber(prev => (prev - 1 + 4) % 4); // Using 3 as we have 3 slides
  };

  const projects = [
    {
      image: "stackoverflow.jpg",
      name: "MiniStackoverflow",
      type: "Project type",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a earum ut libero repudiandae similique atque labore veritatis amet ex."
    },
    {
      image: "gomokuai.jpg",
      name: "Gomoku AI",
      type: "Project type",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a earum ut libero repudiandae similique atque labore veritatis amet ex."
    },
    {
      image: "signlanguage.jpg",
      name: "Bangla sign language learning tools",
      type: "Project type",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a earum ut libero repudiandae similique atque labore veritatis amet ex."
    },
    {
      image: "img01.jpg",
      name: "img of mine",
      type: "Project type",
      description: " Et a earum ut libero repudiandae similique atque labore veritatis amet ex."
    }
  ];

  return (
    <div>
      <div className='body'>
        <section className="main-section">
          <div className="slider">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`slide ${index === slideNumber ? 'active' : ''}`}
              >
                <div className="slide-images">
                  <img src={project.image} alt="" className="slide-bg-image" />
                  <h1 className="project-name">{project.name}</h1>
                </div>

                <div className="slide-text-content">
                  <h3 className="slide-caption">{project.type}</h3>
                  <p className="slide-paragraph">{project.description}</p>
                  <button className="watch-video-btn">Github link</button>
                </div>
              </div>
            ))}
          </div>

          <div className='slider-navigation'>
            <div className="pre-btn" onClick={handlePrevSlide}>
              <i className="ri-arrow-left-s-line"></i> Pre
            </div>
            <div className="next-btn" onClick={handleNextSlide}>
              Next<i className="ri-arrow-right-s-line"></i>
            </div>
          </div>

          <div className="slide-pagination">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index}
                className={`slide-btn ${index === slideNumber ? 'active' : ''}`}
                onClick={() => setSlideNumber(index)}
              ></div>
            ))}
          </div>

          <div className="slide-indicator-bars">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index}
                className={`indicator-bar ${index === slideNumber ? 'active' : ''}`}
              ></div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page6;