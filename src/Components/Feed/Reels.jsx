import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Reels = ({ reels }) => {
  const { id } = useParams(); // Get the selected reel id from URL
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  // Update current index when URL or reels change
  useEffect(() => {
    if (!reels || reels.length === 0) return; // Guard for empty reels
    const index = reels.findIndex((r) => r.id.toString() === id);
    setCurrentIndex(index !== -1 ? index : 0); // Default to 0 if not found
  }, [id, reels]);

  // Guard: wait until reels are loaded
  if (!reels || reels.length === 0) return <div>Loading reels...</div>;

  const reel = reels[currentIndex];

  // Handle edge case where reel is undefined
  if (!reel) return <div>Reel not found</div>;

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      navigate(`/feed/${reels[newIndex].id}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < reels.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      navigate(`/feed/${reels[newIndex].id}`);
    }
  };

  return (
    <div className="w-full h-screen  flex items-center justify-center relative">
      <video
        src={reel.videoUrl}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />

      {/* Prev/Next buttons */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded"
      >
        Prev
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex === reels.length - 1}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded"
      >
        Next
      </button>

      {/* Reel info overlay */}
      <div className="absolute bottom-10 left-4 text-white">
        <h2 className="text-xl font-bold">{reel.title}</h2>
        <p>{reel.username}</p>
      </div>
    </div>
  );
};

export default Reels;
