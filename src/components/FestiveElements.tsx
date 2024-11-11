

const FestiveElements = () => (
  <div className="festive-elements flex flex-wrap justify-center gap-6 mt-12 animate-fade-in z-10 relative">
    {[
      { color: 'bg-red-200', size: 20, shape: 'rounded-full', animation: 'bounce' },
      { color: 'bg-yellow-200', size: 24, shape: 'rounded-full', animation: 'pulse' },
      { color: 'bg-green-200', size: 16, shape: 'rounded-lg', animation: 'spin-slow' },
      { color: 'bg-purple-200', size: 28, shape: 'rounded-full', animation: 'bounce' },
      { color: 'bg-pink-200', size: 18, shape: 'rounded-lg', animation: 'pulse' },
      { color: 'bg-blue-200', size: 22, shape: 'rounded-full', animation: 'spin-slow' },
      { color: 'bg-teal-200', size: 30, shape: 'rounded-full', animation: 'sway' },
      { color: 'bg-orange-200', size: 25, shape: 'rounded-lg', animation: 'float' },
    ].map((element, i) => {
      const size = element.size + Math.random() * 6; // Randomize size slightly for variation
      const randomTop = `${Math.random() * 90}vh`; // Random vertical positioning
      const randomLeft = `${Math.random() * 90}vw`; // Random horizontal positioning

      return (
        <div
          key={i}
          className={`${element.color} ${element.shape} shadow-md transform transition-all duration-500 hover:scale-110`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            opacity: 0.9 + Math.random() * 0.2, // Slight opacity variation
            top: randomTop,
            left: randomLeft,
            animation: `${element.animation} ${Math.random() * 4 + 6}s ease-in-out infinite`,
            transform: `rotate(${Math.random() * 360}deg)`, // Random rotation
          }}
        />
      );
    })}
  </div>
);

export default FestiveElements;
