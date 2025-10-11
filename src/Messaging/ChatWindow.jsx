"use client"

import { useState, useRef, useEffect } from "react"
import { FaPhone, FaVideo, FaEllipsisV, FaPaperclip, FaSmile, FaPaperPlane } from "react-icons/fa"
import Message from "./Message"
import { useNavigate } from "react-router-dom"


function ChatWindow({ chat, messages, onSendMessage }) {
  const [messageText, setMessageText] = useState("")
  const [showMenu, setShowMenu] = useState(false)
  const messagesEndRef = useRef(null)
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = (e) => {
    e.preventDefault()
    if (messageText.trim()) {
      onSendMessage(messageText)
      setMessageText("")
    }
  }

  const handleMenuAction = (action) => {
    console.log(`${action} clicked for user:`, chat.name)
    setShowMenu(false)

    switch (action) {
      case "view-profile":
        console.log("Viewing profile of:", chat)
        break
      case "block":
        console.log("Blocking user:", chat.userId)
        break
      case "delete":
        console.log("Deleting chat with:", chat.userId)
        break
      default:
        break
    }
  }

  return (
    <div className="flex-1 flex flex-col ">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={chat.avatar || "/placeholder.svg"}
              alt={chat.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            {chat.isActive && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{chat.name}</h3>
            <p className="text-xs text-green-500">Active</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              console.log("Voice call to:", chat.name)
              navigate('/chat/audiocall')

            }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaPhone className="text-gray-600" />
          </button>
          <button
            onClick={() => {
              console.log("Video call to:", chat.name)
              navigate('/chat/videocall')
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaVideo className="text-gray-600" />
          </button>
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FaEllipsisV className="text-gray-600" />
            </button>

            {/* Dropdown Menu */}
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200  z-10 ">
                <button
                  onClick={() => handleMenuAction("view-profile")}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 rounded-b-xl transition-colors cursor-pointer "
                >
                  View profile
                </button>
                <button
                  onClick={() => handleMenuAction("block")}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 rounded-b-xl transition-colors cursor-pointer"
                >
                  Block
                </button>
                <button
                  onClick={() => handleMenuAction("delete")}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 rounded-b-xl transition-colors cursor-pointer"
                >
                  Delete Chat
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200">
        <form onSubmit={handleSend} className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
            <input
              type="text"
              placeholder="Type something here..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm text-gray-900 placeholder-gray-500"
            />
            <button
              type="button"
              onClick={() => console.log("Attach file clicked")}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaPaperclip className="text-lg" />
            </button>
            <button
              type="button"
              onClick={() => console.log("Emoji picker clicked")}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaSmile className="text-lg" />
            </button>
          </div>
          <button
            type="submit"
            disabled={!messageText.trim()}
            className="p-3 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatWindow
