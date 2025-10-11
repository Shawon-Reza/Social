import React, { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const FriendCardGrid = () => {
    const navigate = useNavigate();
    const [friendRequests, setFriendRequests] = useState([
        {
            id: 1,
            name: "Mayke Schuurs",
            avatar: "https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg",
            status: "Not a Man but a Ghost",
        },
        {
            id: 2,
            name: "Mayke Schuurs",
            avatar: "https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg",
            status: "Not a Man but a Ghost",
        },
        {
            id: 3,
            name: "Mayke Schuurs",
            avatar: "https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg",
            status: "Not a Man but a Ghost",
        },
        {
            id: 4,
            name: "Mayke Schuurs",
            avatar: "https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg",
            status: "Not a Man but a Ghost",
        },
    ]);

    const [addFriends, setAddFriends] = useState([
        {
            id: 5,
            name: "Mayke Schuurs",
            avatar: "https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg",
            status: "Not a Man but a Ghost",
        },
        {
            id: 6,
            name: "Mayke Schuurs",
            avatar: "https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg",
            status: "Not a Man but a Ghost",
        },
        {
            id: 7,
            name: "Mayke Schuurs",
            avatar: "https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg",
            status: "Not a Man but a Ghost",
        },
        {
            id: 8,
            name: "Mayke Schuurs",
            avatar: "https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg",
            status: "Not a Man but a Ghost",
        },
    ]);

    // Helper for rendering friend cards
    const renderFriendCard = (friend, type) => (
        <div
            key={friend.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center"
        >
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

            <h3 className="text-lg font-semibold">{friend.name}</h3>
            <p className="text-gray-600">{friend.status}</p>

            {type === "requests" ? (
                <div className="flex space-x-2 mt-2">
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                        Cancel
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Approve
                    </button>
                </div>
            ) : (
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add Friend
                </button>
            )}
        </div>
    );

    return (
        <div className="bg-gray-100 min-h-screen">
             <div className='py-7'>
                <Navbar></Navbar>
            </div>

            <section className="container mx-auto px-4">
                {/* Friend Requests Section */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold my-2">Friend Requests</h1>
                        <p className="text-blue-500 text-sm sm:text-base">
                            {friendRequests.length} Friend Requests
                        </p>
                    </div>
                    <button
                        onClick={() => {
                            navigate('/frient_requests/list');
                        }}
                        className="text-blue-500 cursor-pointer px-4 py-2 rounded font-semibold">
                        See All
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {friendRequests.map((friend) => renderFriendCard(friend, "requests"))}
                </div>

                {/* Add Friends Section */}
                <div className="flex items-center justify-between mt-10">
                    <h2 className="text-2xl sm:text-3xl font-bold mt-6 my-3">Add Friends</h2>
                    <button
                        onClick={() => {
                            navigate('/frient_requests/add_friends');
                        }}
                        className="text-blue-500 cursor-pointer px-4 py-2 rounded font-semibold">
                        See All
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {addFriends.map((friend) => renderFriendCard(friend, "add"))}
                </div>
            </section>
        </div>
    );
};

export default FriendCardGrid;
