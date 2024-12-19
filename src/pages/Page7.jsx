import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Page7 = () => {
  return (
    <div className='h-screen relative p-4 bg-gray-100 '>
      <div className='h-90% w-full bg-white overflow-hidden rounded-lg shadow-lg mt-4'>
        {/* Contact Me Section */}
        <div id="contact" className="bg-gray-200 w-4/5 max-w-4xl h-fit p-6 mx-auto shadow-md flex flex-col rounded-lg gap-4">
          <div className="flex flex-row items-center justify-center gap-4 p-4 border-b-2 border-gray-400">
            <div className="bg-gray-500 h-8 w-2"></div>
            <p className="text-3xl font-semibold text-gray-700">Contact With Me</p>
            <i className="fa-solid fa-envelope text-3xl text-emerald-400"></i>
          </div>
          <form className="flex flex-col gap-4 p-4" action="https://formspree.io/f/xrbgwdwr" method="POST" target='_blank'>
            <div className="flex flex-row gap-8 items-center">
              <div className="flex flex-col w-1/2">
                <label htmlFor="name" className="text-lg font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your name " 
                  name="name" 
                  className="p-2 border border-gray-400 rounded-md text-gray-700 focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="email" className="text-lg font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your email" 
                  name="email" 
                  className="p-2 border border-gray-400 rounded-md text-gray-700 focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-medium text-gray-700">Message</label>
              <textarea 
                id="message" 
                rows="6" 
                placeholder="Write your message" 
                name="message" 
                className="p-2 border border-gray-400 rounded-md text-gray-700 focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-emerald-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-emerald-900"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white w-full">
  <p className="text-center text-lg pt-2">This portfolio design is inspired by modern minimalistic <a href="https://www.anzo.studio/" className="text-blue-400 hover:underline" target='_blank'>web designs.</a> </p>
  <div className="flex justify-center ">
  </div>
  <p className="text-center text-lg">Email: <a href="mailto:bsse1325@iit.du.ac.bd" className="text-blue-400 hover:underline">bsse1325@iit.du.ac.bd</a> </p>
  <p className="text-center text-lg mb-2"> © all rights reserved by rony.majumder 2024</p>

</footer>
      </div>
    </div>
  );
};

export default Page7;
