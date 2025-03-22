import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import Video from '../assets/Video.mp4' ; 

const VideoSection = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0" />
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      >
        <source
          src={Video}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-20" />
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30 z-30 group"
      >
        {isMuted ? (
          <VolumeX size={24} className="text-[#FCF7FF] group-hover:scale-110 transition-transform" />
        ) : (
          <Volume2 size={24} className="text-[#FCF7FF] group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default VideoSection;