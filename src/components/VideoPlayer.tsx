import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  onEnded: () => void;
  onError: () => void;
  onBack: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, onEnded, onError, onBack }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((e) => {
        console.error('Error playing video:', e);
        setError('Failed to play video. Please try again.');
        onError();
      });
    }
  }, [src, onError]);

  const handleError = () => {
    setError('Failed to load video. Please try another one.');
    onError();
  };

  if (error) {
    return <div className="text-white text-xl">{error}</div>;
  }

  return (
    <div className="relative w-full h-full">
      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-10 text-white hover:text-gray-300 transition-colors"
      >
        <ArrowLeft className="w-8 h-8" />
        <span className="text-white opacity-0 hover:opacity-100 transition-opacity">
          回前頁
        </span>
      </button>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-contain bg-black"
        onEnded={onEnded}
        onError={handleError}
        autoPlay
        //controls
      />
    </div>
  );
};

export default VideoPlayer;