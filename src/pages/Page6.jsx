
// import React, { useState, useEffect } from 'react';
// import "../Style/ProjectSlider.css";
// import 'remixicon/fonts/remixicon.css';

// const Page6 = () => {
//   const [slideNumber, setSlideNumber] = useState(0);
  
//   // Helper function to handle next slide
//   const handleNextSlide = () => {
//     setSlideNumber(prev => (prev + 1) % 8); // Using 3 as we have 3 slides
//   };

//   // Helper function to handle previous slide
//   const handlePrevSlide = () => {
//     setSlideNumber(prev => (prev - 1 + 8) % 8); // Using 3 as we have 3 slides
//   };

//   const projects = [
//     {
//       image: "stackoverflow.jpg",
//       name: "MiniStackoverflow",
//       type: "Project type",
//       description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a earum ut libero repudiandae similique atque labore veritatis amet ex.",
//       githubLink: "https://github.com/yourusername/ministackoverflow"
//     },
//     {
//       image: "gomokuai.jpg",
//       name: "Gomoku AI",
//       type: "Project type",
//       description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a earum ut libero repudiandae similique atque labore veritatis amet ex.",
//       githubLink: "https://github.com/yourusername/ministackoverflow"
//     },
//     {
//       image: "signlanguage.jpg",
//       name: "Bangla sign language learning tools",
//       type: "Project type",
//       description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a earum ut libero repudiandae similique atque labore veritatis amet ex.",
//       githubLink: "https://github.com/yourusername/ministackoverflow"
//     },
//     {
//       image: "client-server.jpg",
//       name: "Client Server Messenger",
//       type: "Project type",
//       description: " Et a earum ut libero repudiandae similique atque labore veritatis amet ex.",
//       githubLink: "https://github.com/yourusername/ministackoverflow"
//     },
//     {
//       image: "ecommerce.jpg",
//       name: "Ecommerce Wensite",
//       type: "Project type",
//       description: "Et a earum ut libero repudiandae similique atque labore veritatis amet ex.",
//       githubLink: "https://github.com/yourusername/ministackoverflow"
//     },
//     {
//       image: "nasa.jpg",
//       name: "Nasa Space App challenge",
//       type: "Project type",
//       description: "Et a earum ut libero repudiandae similique atque labore veritatis amet ex.",
//       githubLink: "https://github.com/yourusername/ministackoverflow"
//     },
//     {
//       image: "nlp-practice.jpg",
//       name: "BNLP PreProsessing Library",
//       type: "Project type",
//       description: "Et a earum ut libero repudiandae similique atque labore veritatis amet ex.",
//       githubLink: "https://github.com/yourusername/ministackoverflow"
//     },
//     {
//       image: "sentiment.jpg",
//       name: "sentiment Analysis",
//       type: "Project type",
//       description: "Et a earum ut libero repudiandae similique atque labore veritatis amet ex.",
//       githubLink: "https://github.com/yourusername/ministackoverflow"
//     }
//   ];

//   return (
//     <div>
//       <div className='body'>
//         <section className="main-section">
//           <div className="slider">
//             {projects.map((project, index) => (
//               <div 
//                 key={index} 
//                 className={`slide ${index === slideNumber ? 'active' : ''}`}
//               >
//                 <div className="slide-images">
//                   <img src={project.image} alt="" className="slide-bg-image" />
//                   <h1 className="project-name">{project.name}</h1>
//                 </div>

//                 <div className="slide-text-content">
//                   <h3 className="slide-caption">{project.type}</h3>
//                   <p className="slide-paragraph">{project.description}</p>
//                  <button  className="watch-video-btn">
//                  <a 
//                     href={project.githubLink} 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
                   
//                   >
//                     Github link
//                   </a>
//                  </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className='slider-navigation'>
//             <div className="pre-btn" onClick={handlePrevSlide}>
//               <i className="ri-arrow-left-s-line"></i> Pre
//             </div>
//             <div className="next-btn" onClick={handleNextSlide}>
//               Next<i className="ri-arrow-right-s-line"></i>
//             </div>
//           </div>

//           <div className="slide-pagination">
//             {[...Array(8)].map((_, index) => (
//               <div 
//                 key={index}
//                 className={`slide-btn ${index === slideNumber ? 'active' : ''}`}
//                 onClick={() => setSlideNumber(index)}
//               ></div>
//             ))}
//           </div>

//           <div className="slide-indicator-bars">
//             {[...Array(8)].map((_, index) => (
//               <div 
//                 key={index}
//                 className={`indicator-bar ${index === slideNumber ? 'active' : ''}`}
//               ></div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Page6;


import React, { useState, useEffect } from 'react';
import "../Style/ProjectSlider.css";
import 'remixicon/fonts/remixicon.css';

const Page6 = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  
  // Helper function to handle next slide
  const handleNextSlide = () => {
    setSlideNumber(prev => (prev + 1) % 8);
  };

  // Helper function to handle previous slide
  const handlePrevSlide = () => {
    setSlideNumber(prev => (prev - 1 + 8) % 8);
  };

  const projects = [
    {
      image: "stackoverflow.jpg",
      name: "MiniStackoverflow",
      type: "Web Development",
      description: "A comprehensive stackoverflow clone designed to facilitate knowledge sharing and technical problem-solving.",
      githubLink: "https://github.com/rony31416/stack-overflow"
    },
    {
      image: "gomokuai.jpg",
      name: "Gomoku AI",
      type: "Artificial Intelligence",
      description: "An advanced AI-powered Gomoku game with intelligent move prediction and strategic gameplay.",
      githubLink: "https://github.com/rony31416/Gomoku-AI"
    },
    {
      image: "signlanguage.jpg",
      name: "Bangla Sign Language Learning Tools",
      type: "Educational Technology",
      description: "An interactive platform for learning and understanding Bangla sign language through innovative technological solutions.",
      githubLink: "https://github.com/rony31416/Bangla-Sign-Language-Learning-Tool"
    },
    {
      image: "client-server.jpg",
      name: "Client Server Messenger",
      type: "Network Programming",
      description: "A robust client-server messaging application with real-time communication capabilities.",
      githubLink: "https://github.com/rony31416/Client-Server-Messenger"
    },
    {
      image: "ecommerce.jpg",
      name: "Ecommerce Website",
      type: "Web Development",
      description: "A feature-rich ecommerce platform with seamless user experience and comprehensive product management.",
      githubLink: "https://github.com/rony31416/Ecommerce-Website"
    },
    {
      image: "nasa.jpg",
      name: "NASA Space App Challenge",
      type: "Space Technology",
      description: "An innovative solution developed for the NASA Space App Challenge, addressing complex space-related challenges.",
      githubLink: "https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/team-0071/?tab=project"
    },
    {
      image: "nlp-practice.jpg",
      name: "BNLP Preprocessing Library",
      type: "Natural Language Processing",
      description: "A comprehensive preprocesssing library for Bengali Natural Language Processing (NLP) tasks.",
      githubLink: "https://github.com/rony31416/Bangla-NLP"
    },
    {
      image: "sentiment.jpg",
      name: "Sentiment Analysis",
      type: "Machine Learning",
      description: "An advanced sentiment analysis tool leveraging machine learning algorithms to interpret text emotions.",
      githubLink: "https://github.com/rony31416/Sentiment-Analysis"
    }
  ];

  return (
    <div className='h-screen relative p-4 bg-white'>
      <div  className='h-full w-full bg-black  rounded-[16px] body'>
        <section className="main-section ">
          <div className="slider">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`slide ${index === slideNumber ? 'active' : ''}`}
              >
                <div className="project-details">
                  <h2 className="project-title">{project.name}</h2>
                  <div className="project-type">{project.type}</div>
                  <p className="project-description">{project.description}</p>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="github-link"
                  >
                    View on GitHub
                  </a>
                </div>

                <div className="slide-i mages">
                  <img src={project.image} alt="" className="slide-bg-image" />
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