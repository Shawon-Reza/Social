import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import Navbar from '../Navbar';
import { RiMenuAddLine } from 'react-icons/ri';

const HelpSection = ({ topics = [] }) => {
    // Default topics if none are provided
    const defaultTopics = [
        { id: 1, title: "How do I change my account email?", content: "You can log in to your account and change it from your Profile > Edit Profile. Then go to the general tab to change your email." },
        { id: 2, title: "How do I change my account email?", content: "You can log in to your account and change it from your Profile > Edit Profile. Then go to the general tab to change your email." },
        { id: 3, title: "How do I change my account email?", content: "You can log in to your account and change it from your Profile > Edit Profile. Then go to the general tab to change your email." },
        { id: 4, title: "How do I change my account email?", content: "You can log in to your account and change it from your Profile > Edit Profile. Then go to the general tab to change your email." },
        { id: 5, title: "How do I change my account email?", content: "You can log in to your account and change it from your Profile > Edit Profile. Then go to the general tab to change your email." },
        { id: 6, title: "How do I change my account email?", content: "You can log in to your account and change it from your Profile > Edit Profile. Then go to the general tab to change your email." },
    ];

    const topicsToDisplay = topics.length > 0 ? topics : defaultTopics;

    return (
        <div className='bg-gray-50 min-h-screen'>
            <div>
                <Navbar></Navbar>
            </div>
            {/* Main Content */}
            <div className="container mx-auto mt-10 px-4 md:px-8">
                <h1 className="text-gray-800 text-2xl lg:text-4xl font-semibold mb-4">Help</h1>
                <p className="text-gray-600 mb-4 text-sm lg:text-base">Get answers to common questions, learn how to use features, and find support for any issues.</p>

                <div className='bg-white px-4 py-3 my-5 rounded-xl flex  items-center justify-between gap-5'>
                    <input
                        type="search"
                        placeholder='Search posts'
                        className='bg-black/10 font-semibold px-4 py-3 rounded-xl text-[#92929D] w-full outline-none lg:px-6 lg:py-4'
                    />

                    <button
                        className='bg-black/10 px-4 py-3 font-semibold rounded-xl whitespace-nowrap hover:bg-[#c6c6cc] transition duration-200 cursor-pointer  sm:mt-0 lg:px-6 lg:py-4'
                    >
                        Search Now
                    </button>
                </div>

                {/* Topic Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {topicsToDisplay.map((topic) => (
                        <div key={topic.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-200">
                            <div className="flex items-center mb-2">
                                <FaEnvelope className="text-blue-600 mr-2" />
                                <h3 className="text-gray-700 font-medium text-sm sm:text-base lg:text-lg">{topic.title}</h3>
                            </div>
                            <p className="text-gray-600 text-xs sm:text-sm lg:text-base">{topic.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HelpSection;
