import React from 'react'
import "../Style/ProjectSlider.css"
// import SwiperSliders from '../components/SwiperSliders.jsx'; // Adjust the path as needed

const Page6 = () => {
  return (
    <div>
    <div className='body'>
       
        <section className="main-section">

          <div className="slider">

            <div className="slide">

              <div className="slide-images">
                  <img src="img01.jpg" alt="" className="slide-bg-image" />
                  <h1 className="project-name">project name</h1>
              </div>

              <div className="slide-text-content">
                <h3 className="slide-caption">Project type</h3>
                <p className="slide-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a earum ut libero repudiandae similique atque labore veritatis amet ex.
                </p>
                <button className="watch-video-btn ">Watch Video</button>
              </div>
            </div>
          </div>



        </section>

    </div>
  </div>
  )
}

export default Page6