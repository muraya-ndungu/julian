import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const HeaderSection: React.FC = () => {
  return (
    <header className="text-center mb-10 px-4 py-10 sm:py-20 relative">
      {/* Animated Gradient Text with Sparkle Effect */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-6 animate-bounce drop-shadow-xl relative">
        Happy Birthday, Julian Ndungu!
        <span className="animate-spin inline-block">🎉</span>
        
        {/* Sparkle Effect */}
        <span className="absolute inset-0 animate-ping opacity-50 pointer-events-none">
          <div className="absolute left-0 top-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-75 w-full h-full rounded-full"></div>
        </span>

        {/* Floating Confetti (Optional) */}
        <div className="confetti absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => {
            const size = Math.random() * 8 + 10;
            return (
              <div
                key={i}
                className="absolute animate-confetti bg-yellow-400 rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}vh`,
                  left: `${Math.random() * 100}vw`,
                  opacity: Math.random() * 0.5 + 0.5,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDuration: `${4 + Math.random() * 3}s`,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            );
          })}
        </div>
      </h1>

      {/* Typing Effect with Multiple Sentences */}
      <p className="text-lg sm:text-xl text-gray-700 relative font-medium">
        <ReactTypingEffect
          text={["Celebrate Julian's special day with a gift or message!", "Join us in making this day unforgettable!"]}
          speed={80}
          eraseSpeed={50}
          typingDelay={500}
        />
      </p>

      {/* Parallax Background Effect */}
      <div className="parallax-background absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-50 opacity-30 blur-sm z-[-1]">
        {/* Optional Image or Color Gradient */}
      </div>
    </header>
  );
};

export default HeaderSection;
