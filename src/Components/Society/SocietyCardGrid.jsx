import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import CreateSocietyForm from './CreateSocietyForm';

const SocietyCardGrid = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [yourSocieties, setYourSocieties] = useState([
    { id: 1, name: "Society 1", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "1 hour" },
    { id: 2, name: "Society 2", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "2 hours" },
    { id: 3, name: "Society 3", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "3 hours" },
    { id: 4, name: "Society 4", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "4 hours" },
  ]);

  const [joinSocieties, setJoinSocieties] = useState([
    { id: 5, name: "Society 5", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "30 mins" },
    { id: 6, name: "Society 6", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "10 mins" },
    { id: 7, name: "Society 7", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "2 days" },
    { id: 8, name: "Society 8", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "1 week" },
  ]);

  return (
    <div className='bg-gray-100 min-h-screen'>
      <section className='py-7'>
        <Navbar />
      </section>

      <section className='container mx-auto mt-2'>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Society</h1>
          <div className="space-x-2">
            <button
              onClick={handleOpenModal}
              className="flex items-center gap-2 text-[#3B82F6] border border-[#3B82F6] px-4 py-2 rounded hover:bg-blue-600 hover:text-white font-semibold cursor-pointer">
              <FaPlus /> Create New Society
            </button>
          </div>
        </div>

        <CreateSocietyForm isOpen={isModalOpen} onClose={handleCloseModal}></CreateSocietyForm>

        {/* Your Societies */}
        <div className='flex items-center justify-between mt-5'>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Your Societies</h2>
          <p
            onClick={() => navigate('/society/my_society_list')}
            className='text-[#3B82F6] font-semibold cursor-pointer'>
            See All
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {yourSocieties.map((society) => (
            <div
              onClick={() => {
                navigate(`/society/${society?.id}`)
              }}

              key={society.id}
              className="bg-gray-50 rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:scale-103 transform transition-transform duration-700 ease-in-out cursor-pointer"
            >
              <img
                src={society.logo}
                alt={society.name}
                className="w-24 h-24 mb-2"
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


        {/* Join Societies */}
        <div className='flex items-center justify-between mt-15'>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Join Societies</h2>
          <p
            onClick={() => navigate('/society/join_society_list')}
            className='text-[#3B82F6] font-semibold cursor-pointer'>
            See All
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {joinSocieties.map((society) => (
            <div
              onClick={() => {
                navigate(`/society/${society?.id}`)
              }}

              key={society.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:scale-103 transform transition-transform duration-700 ease-in-out cursor-pointer"
            >
              <img
                src={society.logo}
                alt={society.name}
                className="w-24 h-24 mb-2"
              />
              <h3 className="text-lg sm:text-xl font-semibold">{society.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">Last Active {society.lastActive} ago</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm sm:text-base">
                Join
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SocietyCardGrid;
