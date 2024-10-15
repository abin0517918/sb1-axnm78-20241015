import React, { useState } from 'react';
import HomePage from './components/HomePage';
import EnvironmentPage from './components/EnvironmentPage';
import VideoPlayer from './components/VideoPlayer';

const videos = [
  'https://videos.pexels.com/video-files/1448735/1448735-uhd_2732_1440_24fps.mp4',
  'https://videos.pexels.com/video-files/856932/856932-hd_1920_1080_25fps.mp4',
  'https://videos.pexels.com/video-files/3117818/3117818-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/855602/855602-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/855867/855867-hd_1920_1080_30fps.mp4',
];

const buttonLabels = ['宜蘭慈濟史', '宜蘭城歷史', '宜蘭環保簡介', '宜蘭慈善簡介', '靜思心語'];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(null);

  const handleVideoEnd = () => {
    setCurrentVideoIndex(null);
    setCurrentPage('home');
  };

  const handleVideoError = () => {
    console.error('Video failed to load');
    handleVideoEnd();
  };

  const handleButtonClick = (index: number) => {
    if (index === 2) {
      setCurrentPage('environment');
    } else {
      setCurrentVideoIndex(index);
    }
  };

  const handleBackToHome = () => {
    setCurrentVideoIndex(null);
    setCurrentPage('home');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {currentPage === 'home' && currentVideoIndex === null && (
        <HomePage onButtonClick={handleButtonClick} buttonLabels={buttonLabels} />
      )}
      {currentPage === 'environment' && (
        <EnvironmentPage onBack={handleBackToHome} />
      )}
      {currentVideoIndex !== null && (
        <div className="w-full h-full">
          <VideoPlayer
            src={videos[currentVideoIndex]}
            onEnded={handleVideoEnd}
            onError={handleVideoError}
            onBack={handleBackToHome}
          />
        </div>
      )}
    </div>
  );
}

export default App;