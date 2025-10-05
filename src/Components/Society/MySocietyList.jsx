import React, { useState } from 'react';
import Navbar from '../Navbar';

const MySocietyList = () => {
  const [yourSocieties, setYourSocieties] = useState([
    { id: 1, name: "Society 1", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "1 hour" },
    { id: 2, name: "Society 2", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "2 hours" },
    { id: 3, name: "Society 3", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "3 hours" },
    { id: 4, name: "Society 4", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "4 hours" },
    { id: 5, name: "Society 5", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "5 hours" },
    { id: 6, name: "Society 6", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "6 hours" },
    { id: 7, name: "Society 7", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "7 hours" },
    { id: 8, name: "Society 8", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "8 hours" },
    { id: 9, name: "Society 9", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "9 hours" },
    { id: 10, name: "Society 10", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "10 hours" },
    { id: 11, name: "Society 11", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "11 hours" },
    { id: 12, name: "Society 12", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "12 hours" },
  ]);

  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section className='container mx-auto mt-10'>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Society</h1>
        </div>

        {/* Your Societies */}
        <div className='flex items-center justify-between mt-5'>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Your Societies</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {yourSocieties.map((society) => (
            <div
              key={society.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
            >
              <img
                src={society.logo}
                alt={society.name}
                className="w-24 h-24 mb-2 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-semibold">{society.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">Last Active {society.lastActive} ago</p>
              <div className="flex justify-between space-x-2 mt-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm sm:text-base">
                  Leave
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm sm:text-base">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MySocietyList;
