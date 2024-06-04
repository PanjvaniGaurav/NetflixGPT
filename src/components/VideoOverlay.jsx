import React from 'react';

const VideoOverlay = ({ video, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.id === 'video-overlay') {
      onClose();
    }
  };

  return (
    video && (
      <div
        id="video-overlay"
        className="fixed inset-0 z-[10000] flex items-center justify-center bg-black bg-opacity-90"
        onClick={handleOverlayClick}
      >
        <div className="relative bg-[#141414] p-4 rounded-lg max-w-[65vw] w-full mx-4 fade-in">
          <button 
            onClick={onClose} 
            className="absolute top-2 right-2 text-gray-400 hover:text-white focus:outline-none transition-colors p-2 rounded-full hover:bg-gray-700 z-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.key}?autoplay=1`}
              title={video.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    )
  );
};

export default VideoOverlay;
