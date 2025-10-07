"use client"

import { useState } from "react"
import { FiSearch, FiMenu } from "react-icons/fi"
import Navbar from "../Components/Navbar"
import { RiMenuAddLine } from "react-icons/ri"

function FriendsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showMenu, setShowMenu] = useState(false)

  // Mock data - replace with API call
  const [friends, setFriends] = useState([
    {
      id: 1,
      name: "Ahmad Nur Fawaid",
      avatar: "https://i.pravatar.cc/150?img=12",
      timestamp: "12 April at 09:28 PM",
    },
    {
      id: 2,
      name: "Ahmad Nur Fawaid",
      avatar: "https://i.pravatar.cc/150?img=13",
      timestamp: "12 April at 09:28 PM",
    },
    {
      id: 3,
      name: "Ahmad Nur Fawaid",
      avatar: "https://i.pravatar.cc/150?img=14",
      timestamp: "12 April at 09:28 PM",
    },
    {
      id: 4,
      name: "Ahmad Nur Fawaid",
      avatar: "https://i.pravatar.cc/150?img=15",
      timestamp: "12 April at 09:28 PM",
    },
    {
      id: 5,
      name: "Ahmad Nur Fawaid",
      avatar: "https://i.pravatar.cc/150?img=16",
      timestamp: "12 April at 09:28 PM",
    },
    {
      id: 6,
      name: "Ahmad Nur Fawaid",
      avatar: "https://i.pravatar.cc/150?img=17",
      timestamp: "12 April at 09:28 PM",
    },
    {
      id: 7,
      name: "Ahmad Nur Fawaid",
      avatar: "https://i.pravatar.cc/150?img=18",
      timestamp: "12 April at 09:28 PM",
    },
    {
      id: 8,
      name: "Ahmad Nur Fawaid",
      avatar: "https://i.pravatar.cc/150?img=19",
      timestamp: "12 April at 09:28 PM",
    },
    {
      id: 9,
      name: "Ahmad Nur Fawaid",
      avatar: "https://i.pravatar.cc/150?img=20",
      timestamp: "12 April at 09:28 PM",
    },
    {
      id: 10,
      name: "Ahmad Nur Fawaid",
      avatar: "https://i.pravatar.cc/150?img=21",
      timestamp: "12 April at 09:28 PM",
    },
    {
      id: 11,
      name: "Ahmad Nur Fawaid",
      avatar: "https://i.pravatar.cc/150?img=22",
      timestamp: "12 April at 09:28 PM",
    },
    {
      id: 12,
      name: "Ahmad Nur Fawaid",
      avatar: "https://i.pravatar.cc/150?img=23",
      timestamp: "12 April at 09:28 PM",
    },
  ])

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    console.log("Search query:", query)
  }

  // Handle menu toggle
  const handleMenuToggle = () => {
    setShowMenu(!showMenu)
    console.log("Menu toggled:", !showMenu)
  }

  // Handle unfriend
  const handleUnfriend = (friendId, friendName) => {
    console.log("Unfriend clicked for:", friendName, "ID:", friendId)
    // Remove friend from list
    setFriends(friends.filter((friend) => friend.id !== friendId))
    console.log("Friend removed. Remaining friends:", friends.length - 1)
  }

  // Filter friends based on search
  const filteredFriends = friends.filter((friend) => friend.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div>

      <div>
        <Navbar></Navbar>
      </div>

      {/* Main part.................... */}

      <div className="min-h-[calc(100vh-100px)] bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Search Bar */}
          <div className='bg-white px-4 py-3 rounded-xl flex items-center justify-between gap-5'>
            <input type="search"
              placeholder='Search post'
              className='bg-black/10 font-semibold px-4 py-3 rounded-xl text-[#92929D] w-full' />
            <RiMenuAddLine 
            onClick={handleMenuToggle}
            size={40} className='bg-[#3B82F6] cursor-pointer p-2 rounded-lg' color='white' />


          </div>
          <h3 className="my-5 text-3xl font-bold">Friends</h3>

          {/* Friends Grid - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFriends.map((friend) => (
              <div
                key={friend.id}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <img
                    src={friend.avatar || "/placeholder.svg"}
                    alt={friend.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 text-sm truncate">{friend.name}</h3>
                    <p className="text-xs text-gray-500 truncate">{friend.timestamp}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleUnfriend(friend.id, friend.name)}
                  className="ml-3 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex-shrink-0"
                >
                  Unfriend
                </button>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredFriends.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-sm">No friends found</p>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Showing {filteredFriends.length} of {friends.length} friends
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FriendsList
