import { useState } from 'react';

const balloonMessages = [
  'Wishing you all the love and happiness!',
  'Hope you have a magical year ahead!',
  'Sending lots of hugs and kisses!',
];

function BalloonPopGame() {
  const [poppedBalloons, setPoppedBalloons] = useState<number[]>([]);

  const handleBalloonPop = (index: number) => {
    setPoppedBalloons([...poppedBalloons, index]);
    alert(balloonMessages[index]);
  };

  return (
    <div className="balloon-game">
      <h3>Wish Balloon Pop Game</h3>
      <div className="balloons">
        {balloonMessages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleBalloonPop(index)}
            disabled={poppedBalloons.includes(index)}
            className="balloon"
          >
            🎈
          </button>
        ))}
      </div>
    </div>
  );
}

export default BalloonPopGame;
