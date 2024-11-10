import { useState, useEffect } from 'react';
import Confetti from 'react-confetti'; // Confetti for celebration

function GamesPage() {
  const balloons = [
    "First pop!",
    "Happy Birthday!",
    "Here's a surprise wish!",
    "Congrats on popping the balloon!",
    "Keep going!",
    "Amazing pop!",
    "Special gift coming your way!",
    "Another one popped!",
    "You're unstoppable!",
    "You're on fire!",
    "Boom! A new wish!",
    "Great job!"
  ];

  const [message, setMessage] = useState<string | null>(null);
  const [poppedBalloonIndex, setPoppedBalloonIndex] = useState<Set<number>>(new Set());
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [celebration, setCelebration] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(30); // Timer set to 30 seconds
  const [difficulty, setDifficulty] = useState<number>(1); // Start with normal difficulty
  const [balloonTypes, setBalloonTypes] = useState<string[]>([]);

  // Balloon Types
  const balloonColors = ['red', 'yellow', 'blue', 'green', 'pink'];

  const generateBalloonTypes = () => {
    const types = [];
    for (let i = 0; i < 10; i++) {
      const randomType = Math.random() < 0.2 ? 'bonus' : 'normal'; // 20% chance for a bonus balloon
      types.push(randomType);
    }
    setBalloonTypes(types);
  };

  useEffect(() => {
    generateBalloonTypes();
  }, []);

  const popBalloon = (index: number) => {
    if (poppedBalloonIndex.has(index)) return; // Prevent popping the same balloon again

    const randomMessage = balloons[Math.floor(Math.random() * balloons.length)];
    setMessage(randomMessage);
    setPoppedBalloonIndex((prev) => new Set(prev).add(index));

    // Add balloon effect: Random chance to add or subtract time
    if (balloonTypes[index] === 'bonus') {
      setTimer((prev) => prev + 5); // Add time
      setMessage("Bonus time! +5 seconds");
      const bonusSound = new Audio('./src/assets/hooray-36461.mp3');
      bonusSound.play();
    } else if (balloonTypes[index] === 'penalty') {
      setTimer((prev) => prev - 3); // Subtract time
      setMessage("Oh no! Time penalty! -3 seconds");
      const penaltySound = new Audio('./src/assets/penalty-sound.mp3');
      penaltySound.play();
    } else {
      const popSound = new Audio('./src/assets/pop-94319.mp3');
      popSound.play();
    }

    // Check if all balloons are popped
    if (poppedBalloonIndex.size === 9) { // Check when the 10th balloon is popped
      setGameOver(true);
      setCelebration(true);
      const gameOverSound = new Audio('./src/assets/game-over.mp3');
      gameOverSound.play();
    }
  };

  const resetGame = () => {
    setMessage(null);
    setPoppedBalloonIndex(new Set());
    setGameOver(false);
    setCelebration(false);
    setTimer(30); // Reset timer
    setDifficulty(1); // Reset difficulty
    generateBalloonTypes(); // Regenerate balloon types for the next game
  };

  // Countdown Timer
  useEffect(() => {
    if (timer > 0 && !gameOver) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - difficulty); // Adjust speed based on difficulty
      }, 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      setGameOver(true);
    }
  }, [timer, gameOver, difficulty]);

  // Difficulty increase based on time
  useEffect(() => {
    if (timer <= 10) {
      setDifficulty(2); // Hard mode: decrease time faster
    }
    if (timer <= 5) {
      setDifficulty(3); // Very hard mode
    }
  }, [timer]);

  // Celebration effect
  useEffect(() => {
    if (celebration) {
      const timer = setTimeout(() => setCelebration(false), 3000); // Hide celebration after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [celebration]);

  return (
    <div className="games-page min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-yellow-200 py-16 px-4">
      <h2 className="text-4xl font-extrabold text-purple-700 mb-6 drop-shadow-lg text-center">
        🎉 Balloon Pop Game 🎉
      </h2>

      {/* Timer Display */}
      <p className="text-lg font-bold text-gray-700 mb-4">Time Left: {timer} seconds</p>

      {/* Progress Bar */}
      <div className="progress-bar bg-gray-300 w-full h-4 rounded-full mb-4">
        <div className="progress bg-green-500 h-4 rounded-full" style={{ width: `${(poppedBalloonIndex.size / 10) * 100}%` }}></div>
      </div>

      {/* Balloon Container */}
      <div className="balloon-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`balloon w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-${balloonColors[index % 5]}-400 flex items-center justify-center text-5xl cursor-pointer transform transition-transform duration-300 
              ${poppedBalloonIndex.has(index) ? 'scale-50 opacity-50 bg-gray-400' : 'hover:scale-110 hover:rotate-6'}`}
            onClick={() => popBalloon(index)}
          >
            🎈
          </div>
        ))}
      </div>

      {/* Pop Message */}
      {message && (
        <div className="pop-message text-lg font-semibold text-center bg-purple-300 p-4 rounded-md shadow-xl animate-fade-in mb-4">
          <p>{message}</p>
        </div>
      )}

      {/* Game Over and Celebration Messages */}
      {gameOver && (
        <div className="game-over-message text-2xl font-bold text-red-600 mb-8">
          <p>🎉 All balloons popped! Game over! 🎉</p>
        </div>
      )}
      {celebration && <Confetti />}

      {/* Reset or Play Again Button */}
      <button
        className="mt-8 py-3 px-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        onClick={resetGame}
      >
        {gameOver ? 'Play Again' : 'Reset Game'}
      </button>
    </div>
  );
}

export default GamesPage;
