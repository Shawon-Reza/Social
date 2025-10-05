import React from 'react';

const GroupInfo = () => (
    <div className="rounded-lg  p-4 max-w-md mx-auto">
        <div className="flex items-center mb-4 bg-white rounded-lg p-2 px-4">
            <img src="https://www.shutterstock.com/image-photo/happy-handsome-young-business-leader-260nw-2375039955.jpg" alt="Creator" className="w-10 h-10 rounded-full mr-2" />
            <div>
                <p className="text-gray-600 text-sm">Society Created by</p>
                <p className="font-semibold">Ahmad Nur Fawaid</p>
                <p className="text-gray-500 text-xs">12 April 08:28 PM</p>
            </div>
        </div> 
        <div className="mb-4 bg-white rounded-lg p-2 px-4 flex justify-between cursor-pointer transform transition-transform duration-700 ease-in-out hover:scale-101" >
            <p className="text-gray-600 font-semibold">Pending Posts</p>
            <p className="text-lg font-bold">12</p>
        </div>
        <div className="mb-4 flex justify-between bg-white rounded-lg p-2 px-4 cursor-pointer transform transition-transform duration-700 ease-in-out hover:scale-101">
            <p className="text-gray-600 font-semibold">Pending Members</p>
            <p className="text-lg font-bold">12</p>
        </div>
        <div className="mb-4 bg-white rounded-lg p-2 px-4">
            <div className="flex justify-between items-center mb-2">
                <p className="text-gray-600 font-semibold">About Group</p>
                <button className=" text-sm hover:underline border border-[#E2E8F0]  p-1 px-6 rounded-lg cursor-pointer">Edit</button>
            </div>
            <hr className=' border border-[#F0F0F0] my-3' />
            <p className="text-gray-800">UI/UX Designers group</p>
            <p className="text-gray-600 text-sm mt-1">This group is meant for designers - a place to learn and share - to ask questions, network, and improve.</p>
            <p className="text-gray-600 text-sm mt-1">Hashtag your posts to help others easily navigate. Avoid using more than a single hashtag per post.</p>
            <p className="text-gray-600 text-sm mt-1">Suggested tags include: #job #blog #dribbble #learn #discuss #contest #portfolio</p>
        </div>
    </div>
);

export default GroupInfo;