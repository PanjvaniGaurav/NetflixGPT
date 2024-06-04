// ClipsModal.js
import React, { useState, useRef, useEffect } from 'react';
import VideoOverlay from './VideoOverlay';

const ClipsModal = ({ clips, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const clipsPerPage = 5;
  const totalPages = Math.ceil(clips.length / clipsPerPage);

  const scrollRef = useRef(null);

  const handleScroll = () => {
    const { scrollLeft, scrollWidth } = scrollRef.current;
    const pageWidth = scrollWidth / totalPages;
    const currentPage = Math.floor(scrollLeft / pageWidth) + 1;
    setCurrentPage(currentPage);
  };

  useEffect(() => {
    const ref = scrollRef.current;
    ref.addEventListener('scroll', handleScroll);
    return () => ref.removeEventListener('scroll', handleScroll);
  }, [totalPages]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (scrollRef.current) {
      const pageWidth = scrollRef.current.scrollWidth / totalPages;
      scrollRef.current.scrollLeft = (pageNumber - 1) * pageWidth;
    }
  };

  const handleVideoClick = (clip) => {
    setSelectedVideo(clip);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  const indexOfLastClip = currentPage * clipsPerPage;
  const indexOfFirstClip = indexOfLastClip - clipsPerPage;
  const currentClips = clips.slice(indexOfFirstClip, indexOfLastClip);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black bg-opacity-75">
      <div className="bg-[#141414] p-10 rounded-lg max-w-[95vw] w-full mx-6 relative">
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-400 hover:text-white focus:outline-none transition-colors p-2 rounded-full hover:bg-gray-700 z-[10]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-white mb-6">Related Clips</h2>

        <div 
          ref={scrollRef}
          className="grid grid-flow-col auto-cols-[80%] md:auto-cols-[50%] lg:auto-cols-[33.33%] xl:auto-cols-[20%] gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {clips.map((clip, index) => (
            <div 
              key={index} 
              className="bg-[#1f1f1f] rounded-lg overflow-hidden shadow-xl snap-center cursor-pointer"
              onClick={() => handleVideoClick(clip)}
            >
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${clip.key}?autoplay=0`}
                  title={clip.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-md font-semibold text-white line-clamp-2 hover:text-red-500 transition-colors">
                  {clip.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-6 space-x-2">
            {currentPage > 1 && (
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                className="text-gray-400 hover:text-white focus:outline-none transition-colors p-2 rounded-full hover:bg-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 0 01-1.414 1.414l-4-4a1 1 010-1.414l4-4a1 1 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            )}

            {pageNumbers.map(number => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  currentPage === number
                    ? 'bg-red-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {number}
              </button>
            ))}

            {currentPage < totalPages && (
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                className="text-gray-400 hover:text-white focus:outline-none transition-colors p-2 rounded-full hover:bg-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 0 011.414-1.414l4 4a1 0 010 1.414l-4 4a1 1 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        )}

        <p className="text-gray-500 text-xs mt-4 text-center">
          Showing {indexOfFirstClip + 1}-{Math.min(indexOfLastClip, clips.length)} out of {clips.length} available clips.
        </p>
      </div>

      <VideoOverlay video={selectedVideo} onClose={handleCloseVideo} />
    </div>
  );
};

export default ClipsModal;
