"use client"

import { useState, useEffect, useRef } from "react"
import { X, ChevronRight } from "lucide-react"

const ShareModal = ({ isOpen, onClose, postData }) => {
  const [shareMessage, setShareMessage] = useState("")
  const [selectedUsers, setSelectedUsers] = useState([])
  const [selectedSocieties, setSelectedSocieties] = useState([])

  // Create a ref for the modal popup
  const popupRef = useRef(null)

  // Mock data for users and societies - replace with API calls
  const mockUsers = [
    { id: 1, name: "Ahmad", avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg" },
    { id: 2, name: "Ahmad", avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg" },
    { id: 3, name: "Ahmad", avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg" },
    { id: 4, name: "Ahmad", avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg" },
    { id: 5, name: "Ahmad", avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg" },
    { id: 6, name: "Ahmad", avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg" },
  ]

  const mockSocieties = [
    { id: 1, name: "Ahmad", avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg", isSelected: true },
    { id: 2, name: "Ahmad", avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg", isSelected: false },
    { id: 3, name: "Ahmad", avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg", isSelected: false },
    { id: 4, name: "Ahmad", avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg", isSelected: false },
    { id: 5, name: "Ahmad", avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg", isSelected: false },
    { id: 6, name: "Ahmad", avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg", isSelected: false },
  ]

  const handleUserSelect = (userId) => {
    setSelectedUsers((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
  }

  const handleSocietySelect = (societyId) => {
    setSelectedSocieties((prev) =>
      prev.includes(societyId) ? prev.filter((id) => id !== societyId) : [...prev, societyId],
    )
  }

  const handleShareNow = () => {
    // console.log("[v0] Share now clicked:", {
    //   postData,
    //   message: shareMessage,
    //   selectedUsers,
    //   selectedSocieties,
    // })
    onClose()
  }

  const handleShare = () => {
    // console.log("[v0] Share clicked:", {
    //   postData,
    //   message: shareMessage,
    //   selectedUsers,
    //   selectedSocieties,
    // })
    onClose()
  }

  // Close the modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose(); // Close the modal if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up the event listener
    };
  }, [onClose]);

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/15 flex items-center justify-center z-50 transition-opacity duration-300">
      <div
        ref={popupRef}  // Assign ref to the modal container
        className={`bg-white rounded-xl w-[60%] max-h-[90vh] overflow-hidden transform transition-transform duration-500 ease-out min-w-[420px]
          
          ${isOpen ? "translate-y-0" : "translate-y-full"}`}

      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Share</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">

          {/* User Profile Section */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center space-x-3 mb-3">
              <img src="https://media.istockphoto.com/id/492529287/photo/portrait-of-happy-laughing-man.jpg?s=612x612&w=0&k=20&c=0xQcd69Bf-mWoJYgjxBSPg7FHS57nOfYpZaZlYDVKRE=" alt="Ahmad Nur Fawaid" className="w-10 h-10 rounded-full object-cover" />
              <span className="font-bold text-gray-900">Ahmad Nur Fawaid</span>
            </div>

            {/* Message Input */}
            <textarea
              value={shareMessage}
              onChange={(e) => setShareMessage(e.target.value)}
              placeholder="Say something about this (optional)"
              className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
            />

            {/* Share Now Button */}
            <div className="flex justify-end mt-3">
              <button
                onClick={handleShareNow}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium cursor-pointer"
              >
                Share now
              </button>
            </div>
          </div>

          {/* Send in Message Section */}
          <div className="px-4 py-4">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Send in Message</h3>
            <div className="flex items-center space-x-3 overflow-x-auto pb-2 gap-5">
              {mockUsers.map((user) => (
                <div key={user.id} className="flex-shrink-0 text-center">
                  <button
                    onClick={() => handleUserSelect(user.id)}
                    className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-colors ${selectedUsers.includes(user.id) ? "border-blue-500" : "border-gray-200 hover:border-gray-300"}`}
                  >
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <span className="text-xs text-gray-600 mt-1 block">{user.name}</span>
                </div>
              ))}
              <button className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Send in Society Section */}
          <div className="px-4 py-4">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Send in Society</h3>
            <div className="flex items-center space-x-3 overflow-x-auto pb-2 gap-5">
              {mockSocieties.map((society) => (
                <div key={society.id} className="flex-shrink-0 text-center">
                  <button
                    onClick={() => handleSocietySelect(society.id)}
                    className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition-colors ${selectedSocieties.includes(society.id) || society.isSelected ? "border-blue-500" : "border-gray-200 hover:border-gray-300"}`}
                  >
                    <img
                      src={society.avatar || "/placeholder.svg"}
                      alt={society.name}
                      className="w-full h-full object-cover"
                    />
                    {(selectedSocieties.includes(society.id) || society.isSelected) && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                  <span className="text-xs text-gray-600 mt-1 block">{society.name}</span>
                </div>
              ))}
              <button className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Share Button */}
        <div className="p-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={handleShare}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium cursor-pointer"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShareModal
