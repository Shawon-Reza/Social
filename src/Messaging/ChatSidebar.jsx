"use client"

import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import ChatListItem from "./ChatListItem"

function ChatSidebar({ chats, selectedChat, onChatSelect, filter, onFilterChange }) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    console.log("Searching for:", e.target.value)
  }

  const filteredChats = chats.filter((chat) => chat.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="w-full md:w-80 lg:w-96 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Chats</h2>

        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search person"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          <button
            onClick={() => onFilterChange("all")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            See All
          </button>
          <button
            onClick={() => onFilterChange("unread")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === "unread" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Unread
          </button>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <ChatListItem
              key={chat.id}
              chat={chat}
              isSelected={selectedChat?.id === chat.id}
              onClick={() => onChatSelect(chat)}
            />
          ))
        ) : (
          <div className="p-4 text-center text-gray-500 text-sm">No chats found</div>
        )}
      </div>
    </div>
  )
}

export default ChatSidebar
