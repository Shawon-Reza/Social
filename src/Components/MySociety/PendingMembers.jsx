"use client"

import { useEffect, useState } from "react"
import { FiSearch } from "react-icons/fi"
import { RiMenuAddLine } from "react-icons/ri"
import Navbar from "../Navbar"
import { motion, AnimatePresence } from "framer-motion"

function PendingMembers() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showMenu, setShowMenu] = useState(false)
  const [friends, setFriends] = useState([])

  // Simulated API call
  useEffect(() => {
    const fetchPendingMembers = async () => {
      // Simulate API delay
      await new Promise((res) => setTimeout(res, 500))

      setFriends([
        {
          id: 1,
          name: "Ahmad Nur Fawaid",
          avatar: "https://i.pravatar.cc/150?img=12",
          timestamp: "12 April at 09:28 PM",
        },
        {
          id: 2,
          name: "Siti Rahmawati",
          avatar: "https://i.pravatar.cc/150?img=13",
          timestamp: "12 April at 10:05 PM",
        },
        {
          id: 3,
          name: "Muhammad Irfan",
          avatar: "https://i.pravatar.cc/150?img=14",
          timestamp: "13 April at 08:20 AM",
        },
        {
          id: 4,
          name: "Nur Aisyah",
          avatar: "https://i.pravatar.cc/150?img=15",
          timestamp: "13 April at 09:45 AM",
        },
        {
          id: 5,
          name: "Dewi Anggraini",
          avatar: "https://i.pravatar.cc/150?img=16",
          timestamp: "13 April at 01:10 PM",
        },
      ])
    }

    fetchPendingMembers()
  }, [])

  // Search handling
  const handleSearch = (e) => setSearchQuery(e.target.value)

  // Menu toggle
  const handleMenuToggle = () => setShowMenu((prev) => !prev)

  // Add Society handler
  const handleAddSociety = (friendId, friendName) => {
    console.log("Approved member:", friendName)
    setFriends((prev) => prev.filter((f) => f.id !== friendId))
  }

  // Filtered list
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Search bar */}
        <div className="bg-white shadow-sm px-4 py-3 rounded-xl flex items-center justify-between gap-3">
          <div className="relative flex-1">
            <FiSearch className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              type="search"
              placeholder="Search members..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-100 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <RiMenuAddLine
            onClick={handleMenuToggle}
            size={40}
            className={`cursor-pointer p-2 rounded-lg transition-colors ${
              showMenu ? "bg-blue-700" : "bg-blue-500"
            }`}
            color="white"
          />
        </div>

        {/* Menu Dropdown */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white mt-2 rounded-lg shadow-md p-4"
            >
              <p className="text-gray-600 text-sm">
                ⚙️ Future menu actions (e.g. filter by date, sort, bulk approve, etc.)
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <h3 className="my-6 text-3xl font-bold text-gray-800">
          Pending Members
        </h3>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredFriends.map((friend) => (
              <motion.div
                key={friend.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow flex items-center justify-between"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-200"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm truncate">
                      {friend.name}
                    </h3>
                    <p className="text-xs text-gray-500 truncate">
                      {friend.timestamp}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleAddSociety(friend.id, friend.name)}
                  className="ml-3 px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition"
                >
                  Add Society
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredFriends.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-sm">No pending members found 😕</p>
          </div>
        )}

        {/* Count */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Showing {filteredFriends.length} of {friends.length} members
        </div>
      </div>
    </div>
  )
}

export default PendingMembers
