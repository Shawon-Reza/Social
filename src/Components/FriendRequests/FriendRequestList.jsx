import React, { useState } from 'react';
import Navbar from '../Navbar';

const FriendRequestList = () => {
    const [friendRequests] = useState([
        { id: 1, name: "Mayke Schuurs", avatar: "https://cdn.vectorstock.com/i/500p/97/32/male-profile-silhouette-vector-2139732.jpg", status: "Not a Man but a Ghost" },
        { id: 2, name: "Mayke Schuurs", avatar: "https://cdn.vectorstock.com/i/500p/97/32/male-profile-silhouette-vector-2139732.jpg", status: "Not a Man but a Ghost" },
        { id: 3, name: "Mayke Schuurs", avatar: "https://cdn.vectorstock.com/i/500p/97/32/male-profile-silhouette-vector-2139732.jpg", status: "Not a Man but a Ghost" },
        { id: 4, name: "Mayke Schuurs", avatar: "https://cdn.vectorstock.com/i/500p/97/32/male-profile-silhouette-vector-2139732.jpg", status: "Not a Man but a Ghost" },
        { id: 5, name: "Mayke Schuurs", avatar: "https://cdn.vectorstock.com/i/500p/97/32/male-profile-silhouette-vector-2139732.jpg", status: "Not a Man but a Ghost" },
        { id: 6, name: "Mayke Schuurs", avatar: "https://cdn.vectorstock.com/i/500p/97/32/male-profile-silhouette-vector-2139732.jpg", status: "Not a Man but a Ghost" },
        { id: 7, name: "Mayke Schuurs", avatar: "https://cdn.vectorstock.com/i/500p/97/32/male-profile-silhouette-vector-2139732.jpg", status: "Not a Man but a Ghost" },
        { id: 8, name: "Mayke Schuurs", avatar: "https://cdn.vectorstock.com/i/500p/97/32/male-profile-silhouette-vector-2139732.jpg", status: "Not a Man but a Ghost" },
        { id: 9, name: "Mayke Schuurs", avatar: "https://cdn.vectorstock.com/i/500p/97/32/male-profile-silhouette-vector-2139732.jpg", status: "Not a Man but a Ghost" },
        { id: 10, name: "Mayke Schuurs", avatar: "https://cdn.vectorstock.com/i/500p/97/32/male-profile-silhouette-vector-2139732.jpg", status: "Not a Man but a Ghost" },
        { id: 11, name: "Mayke Schuurs", avatar: "https://cdn.vectorstock.com/i/500p/97/32/male-profile-silhouette-vector-2139732.jpg", status: "Not a Man but a Ghost" },
        { id: 12, name: "Mayke Schuurs", avatar: "https://cdn.vectorstock.com/i/500p/97/32/male-profile-silhouette-vector-2139732.jpg", status: "Not a Man but a Ghost" },
    ]);

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold my-3">Friends requests</h1>
                        <p className="text-blue-500 text-sm sm:text-base">12 Friend requests</p>
                    </div>
                    
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {friendRequests.map(friend => (
                        <div key={friend.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
                            <div className="flex justify-between items-start gap-5">
                                <img
                                    src={friend.avatar}
                                    alt={friend.name}
                                    className="w-18 h-18 rounded-full mb-2"
                                />
                                <p className="bg-[#FFF9D9] text-[#998100] px-2 py-1 rounded">
                                    Follow
                                </p>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold">{friend.name}</h3>
                            <p className="text-gray-600 text-sm sm:text-base">{friend.status}</p>
                            <div className="flex flex-wrap justify-center gap-2 mt-3">
                                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 w-full sm:w-auto">
                                    Cancel
                                </button>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto">
                                    Approve
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FriendRequestList;
