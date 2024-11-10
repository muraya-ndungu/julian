import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const WelcomeSection = () => (
  <header className="relative text-center mt-16 mb-12 animate-fade-in z-10 px-6 sm:px-12 lg:px-24">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-600 drop-shadow-2xl tracking-wide leading-tight mb-4 animate__animated animate__fadeIn">
      Welcome to the Celebration!
    </h1>
    <p className="text-lg sm:text-xl mt-6 text-gray-800 max-w-2xl mx-auto px-4 md:px-0 leading-relaxed">
      <ReactTypingEffect
        text={["Join us in celebrating our little one's first birthday!"]}
        speed={100}
        eraseSpeed={50}
        typingDelay={500}
        cursorRenderer={(cursor) => <span className="text-red-600">{cursor}</span>}
      />
    </p>
    <div className="mt-8 animate-bounce">
      <span className="text-5xl sm:text-6xl text-yellow-500">🎉</span>
    </div>
    {/* Optional Button to Call to Action */}
    <div className="mt-10">
      <a 
        href="#invite"
        className="inline-block px-8 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-60"
      >
        Join the Fun!
      </a>
    </div>
  </header>
);

export default WelcomeSection;
