import { Link } from 'react-router-dom';
import HeaderSection from '../components/HeaderSection';
import ConfettiBackground from '../components/ConfettiBackground';
import FestiveElements from '../components/FestiveElements';
import WelcomeSection from '../components/WelcomeSection';
import FeaturePhoto from '../components/FeaturePhoto';
import CountdownTile from '../components/CountdownTile';
import NavButtons from '../components/NavButtons';
import './Home.css';

// Video Section Component
const VideoSection = () => (
  <section className="w-full h-96 relative mt-24 px-4 animate-fade-in z-0">
    <video
      className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
      autoPlay
      loop
      muted
      controls={false}
      src="/src/assets/Happy Birthday Song!!!.mp4"
    >
      Your browser does not support the video tag.
    </video>
  </section>
);

// Main HomePage Component
const HomePage = () => (
  <div className="home-page bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen flex flex-col items-center p-4 overflow-hidden relative">
    <ConfettiBackground />
    <HeaderSection />
    <NavButtons />
    <VideoSection />
    <WelcomeSection />
    <FeaturePhoto />
    <CountdownTile/>
    <FestiveElements />
  </div>
);

export default HomePage;
