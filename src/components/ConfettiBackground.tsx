

// Confetti Background Component
const ConfettiBackground = () => {
  return (
    <div className="confetti-background absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {[...Array(80)].map((_, i) => {
        // Random size and positioning for each confetti piece
        const size = Math.random() * 12 + 8; // Confetti pieces range from 8px to 20px
        const shapes = ['rounded-full', 'rounded-lg', 'rounded-sm'];
        const colors = [
          'bg-red-500', 'bg-yellow-400', 'bg-green-400', 'bg-blue-500', 
          'bg-pink-500', 'bg-purple-500', 'bg-teal-400', 'bg-orange-500'
        ];
        const animations = ['float', 'spin-slow', 'drift', 'sway'];
        const animationDuration = Math.random() * 6 + 4; // Animation duration varies between 4s and 10s
        const animationDelay = Math.random() * 4; // Random delay between 0s and 4s
        const animationTimingFunction = 'ease-in-out'; // Smooth easing for more fluid animations

        return (
          <div
            key={i}
            className={`${colors[i % colors.length]} ${shapes[i % shapes.length]} absolute`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}vh`, // Random top position to spread across the screen
              left: `${Math.random() * 100}vw`, // Random left position to spread across the screen
              opacity: Math.random() * 0.7 + 0.3, // Slight opacity for a soft and delicate look
              transform: `rotate(${Math.random() * 360}deg)`, // Random rotation for better randomness
              animationDuration: `${animationDuration}s`, // Animation duration varies
              animationDelay: `${animationDelay}s`, // Random delay to make them look more natural
              animationTimingFunction, // Smooth easing for fluid animations
              animationName: animations[i % animations.length], // Random animation from the list
            }}
          />
        );
      })}
    </div>
  );
};

export default ConfettiBackground;
