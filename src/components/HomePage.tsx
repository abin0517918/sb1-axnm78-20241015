import React from 'react';
import BackgroundCarousel from './BackgroundCarousel';

interface HomePageProps {
  onButtonClick: (index: number) => void;
  buttonLabels: string[];
}

const backgroundImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
  'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
];

const HomePage: React.FC<HomePageProps> = ({ onButtonClick, buttonLabels }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <BackgroundCarousel images={backgroundImages} />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center">
        <h1 className="text-4xl font-bold text-white mb-8">宜蘭慈濟園區</h1>
        <div className="flex justify-center gap-4 mb-8">
          {buttonLabels.map((label, index) => (
            <button
              key={index}
              onClick={() => onButtonClick(index)}
              className="bg-white bg-opacity-20 px-6 py-3 rounded-lg hover:bg-opacity-30 transition-all transform hover:scale-110"
            >
              <span className="text-white font-bold">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;