import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import MySocietyCoverpicUpload from './MySocietyCoverpicUpload';

const GroupSection = () => {
  const membersCount = 2564;
  
  const defaultProfiles = [
    { src: 'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg', alt: 'Profile 1' },
    { src: 'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg', alt: 'Profile 2' },
    { src: 'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg', alt: 'Profile 3' },
    { src: 'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg', alt: 'Profile 4' },
    { src: 'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg', alt: 'Profile 5' },
    { src: 'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg', alt: 'Profile 6' },
    { src: 'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg', alt: 'Profile 7' },
    { src: 'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg', alt: 'Profile 8' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mx-auto ">
      {/* Cover Image Section */}
      <div className="relative">
      
        <button className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full font-medium hover:bg-gray-700 transition duration-200">
          Edit Cover
        </button>

        <MySocietyCoverpicUpload></MySocietyCoverpicUpload>
        
      </div>

      {/* Profile Row Section */}
      <div className="p-4 flex flex-col items-start">
        <div className="flex items-center justify-between w-full mb-4">
          <span className="text-gray-600 font-medium">Members · {membersCount.toLocaleString()}</span>
          <a href="#" className="text-blue-600 text-sm hover:text-blue-800 hover:underline">SEE ALL</a>
        </div>
        <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
          {defaultProfiles.map((profile, index) => (
            <img
              key={index}
              src={profile.src}
              alt={profile.alt}
              className="w-10 h-10 rounded-full object-cover transition-transform duration-200 hover:scale-110"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupSection;