import React, { useState } from 'react';
import Navbar from '../Navbar';
import { FaPlus } from 'react-icons/fa';

const JoinSocietyList = () => {

    const [joinSocieties, setJoinSocieties] = useState([
        { id: 5, name: "Society 5", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "30 mins" },
        { id: 6, name: "Society 6", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "10 mins" },
        { id: 7, name: "Society 7", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "2 days" },
        { id: 8, name: "Society 8", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "1 week" },
        { id: 5, name: "Society 5", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "30 mins" },
        { id: 6, name: "Society 6", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "10 mins" },
        { id: 7, name: "Society 7", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "2 days" },
        { id: 8, name: "Society 8", logo: "https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg", lastActive: "1 week" },
    ]);

    return (
        <div className=" ">
            <section>
                <Navbar />
            </section>

            <section className='container mx-auto mt-10'>
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl sm:text-3xl font-bold">Society</h1>
                </div>

                {/* Join Societies */}
                <div className='flex items-center justify-between mt-5'>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">Join Societies</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {joinSocieties.map((society) => (
                        <div
                            key={society.id}
                            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center "
                        >
                            <img
                                src={society.logo}
                                alt={society.name}
                                className="w-24 h-24 mb-2 object-cover rounded-full"
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

export default JoinSocietyList;
