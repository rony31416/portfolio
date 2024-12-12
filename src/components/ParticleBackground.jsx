import React, { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
          },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, direction: 'none', out_mode: 'out' },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
          },
        },
        retina_detect: true,
      });
    } else {
      console.error('particles.js script not loaded!');
    }
  }, []);

  return (
    <div className="relative">
      <div id="particles-js" className="absolute inset-0 h-screen rounded-lg shadow-lg"></div>
      <header className="absolute top-0 left-0 right-0 z-10 flex justify-center items-center flex-col text-center pt-10">
        <h1 className="text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-b-4 border-gray-300 p-2">
          Skillsets, Library, and Frameworks
        </h1>
      </header>
    </div>
  );
};

export default ParticleBackground;
