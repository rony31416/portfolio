import React from 'react'
import "../Style/ProjectSlider.css"
import 'remixicon/fonts/remixicon.css'
// import SwiperSliders from '../components/SwiperSliders.jsx'; // Adjust the path as needed

const Page6 = () => {
  return (
    <div>
      <div className='body'>

        <section className="main-section">

          <div className="slider">

            <div className="slide">

              <div className="slide-images">
                <img src="\src\assets\image\stackoverflow.jpg" alt="" className="slide-bg-image" />
                <h1 className="project-name">MiniStackoverflow</h1>
              </div>

              <div className="slide-text-content">
                <h3 className="slide-caption">Project type</h3>
                <p className="slide-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a earum ut libero repudiandae similique atque labore veritatis amet ex.
                </p>
                <button className="watch-video-btn">Watch Video</button>
              </div>
            </div>



            <div className="slide">

              <div className="slide-images">
                <img src="\src\assets\image\gomoku ai.jpg" alt="" className="slide-bg-image" />
                <h1 className="project-name">Gomoku AI</h1>
              </div>

              <div className="slide-text-content">
                <h3 className="slide-caption">Project type</h3>
                <p className="slide-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a earum ut libero repudiandae similique atque labore veritatis amet ex.
                </p>
                <button className="watch-video-btn">Watch Video</button>
              </div>
            </div>



            <div className="slide">

              <div className="slide-images">
                <img src="\src\assets\image\signlanguage.jpg" alt="" className="slide-bg-image" />
                <h1 className="project-name">Bangla sign language learning tools</h1>
              </div>

              <div className="slide-text-content">
                <h3 className="slide-caption">Project type</h3>
                <p className="slide-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a earum ut libero repudiandae similique atque labore veritatis amet ex.
                </p>
                <button className="watch-video-btn">Watch Video</button>
              </div>
            </div>





          </div>
          {/* slider left/right arrow navigastion */}

          <div className='slider-navigation'>
            <div className="pre-btn ">
              <i class="ri-arrow-left-s-line"></i> Pre
            </div>
            <div className="next-btn">
              Next<i class="ri-arrow-right-s-line"></i>
            </div>
          </div>

          {/* slider pagination button for each side  */}

          <div className="slide-pagination">
            <div className="slide-btn"></div>
            <div className="slide-btn"></div>
            <div className="slide-btn"></div>
            <div className="slide-btn"></div>
            <div className="slide-btn"></div>
            <div className="slide-btn"></div>
            <div className="slide-btn"></div>
            <div className="slide-btn"></div>
          </div>


          {/* slide visibility indicator bar */}

          <div className="slide-indicator-bars">
            <div className="indicator-bar"></div>
            <div className="indicator-bar"></div>
            <div className="indicator-bar"></div>
            <div className="indicator-bar"></div>
            <div className="indicator-bar"></div>
            <div className="indicator-bar"></div>
            <div className="indicator-bar"></div>
            <div className="indicator-bar"></div>
          </div>


        </section>

      </div>
    </div>
  )
}

export default Page6