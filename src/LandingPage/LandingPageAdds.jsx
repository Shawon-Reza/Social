import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const advertisements = [
  {
    id: 1,
    logo: "https://via.placeholder.com/30",
    title: "Unlock the power of automation with NeuroNext AI.",
    videoThumbnail: "https://i.imgur.com/AbOeF7G.png",
    videoUrl: "https://www.youtube.com/embed/hgi2MYAFgE8", // ✅ embed format
    name: "Sarah Thompson",
    role: "Marketing Director",
  },
  {
    id: 2,
    logo: "https://via.placeholder.com/30",
    title: "At Urban Vogue, fashion isn’t just clothing—it’s self-expression.",
    videoThumbnail: "https://i.imgur.com/E2Zsmmn.png",
    videoUrl: "https://www.youtube.com/embed/K4TOrB7at0Y",
    name: "David Lee",
    role: "Business Owner",
  },
  {
    id: 3,
    logo: "https://via.placeholder.com/30",
    title: "ZenLife Hub brings mindfulness, fitness, and nutrition together",
    videoThumbnail: "https://i.imgur.com/NzGfFHz.png",
    videoUrl: "https://www.youtube.com/embed/hgi2MYAFgE8", // ✅ fixed embed
    name: "Emily Carter",
    role: "Socmed Manager",
  },
];

const LandingPageAdds = () => {
  const [playingAdId, setPlayingAdId] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="px-4 py-20 mx-auto text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Unlock Your <br />
        <span className="text-blue-600">Social Media Growth</span>
      </h2>
      <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
        We help you amplify your voice, grow your online influence, and connect
        with the world. From creators to businesses, we empower you to reach new
        heights.
      </p>

      {/* Ads Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {advertisements.map((ad) => (
          <div
            key={ad.id}
            className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition duration-300 text-left flex flex-col"
          >
            {/* Logo + Brand */}
            <div className="flex items-center mb-4 space-x-2">
              <img src={ad.logo} alt="logo" className="w-6 h-6" />
              <span className="font-bold text-sm text-blue-600">Logoipsum</span>
            </div>

            {/* Title */}
            <p className="font-medium text-gray-800 mb-4">{ad.title}</p>

            {/* Video / Thumbnail */}
            <div className="relative rounded-xl overflow-hidden aspect-video">
              {playingAdId === ad.id ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`${ad.videoUrl}?autoplay=1`}
                  title={ad.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              ) : (
                <>
                  <img
                    src={ad.videoThumbnail}
                    alt="video"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <button
                    onClick={() => setPlayingAdId(ad.id)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-white p-2 rounded-full shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </>
              )}
            </div>

            {/* Name + Role */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 text-sm text-gray-700">
              <span>{ad.name}</span>
              <span className="text-gray-400 sm:ml-4">{ad.role}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Advertisement Button */}
      <button
      onClick={() => navigate("/advertisement-request")}
        className="mt-10 w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 
                   bg-blue-600 text-white text-sm sm:text-base md:text-xl lg:text-2xl 
                   rounded-full hover:bg-blue-700 transition font-semibold cursor-pointer"
      >
        Add your advertisement
      </button>
    </div>
  );
};

export default LandingPageAdds;
