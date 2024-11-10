import { useRef } from 'react';

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playMusic = () => {
    audioRef.current?.play();
  };

  return (
    <div className="music-player">
      <button onClick={playMusic}>Play Birthday Song 🎶</button>
      <audio ref={audioRef} src="/path-to-your-birthday-song.mp3" />
    </div>
  );
}

export default MusicPlayer;
