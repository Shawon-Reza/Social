"use client"

import { useState, useEffect, useRef } from "react"
import { X, ChevronRight } from "lucide-react"

const CommentsModal = ({ isOpen, onClose, postId }) => {
  const [shareMessage, setShareMessage] = useState("") // For typing the comment
  const [comments, setComments] = useState([]) // To store comments
  const popupRef = useRef(null)

  console.log(postId)
  // Mock data for comments - replace with actual API calls
  const mockComments = [
    {
      id: 1,
      user: {
        username: "Mika Johnson",
        avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg",
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisl, eros neque, lorem vel vulputate vitae lorem.",
      timestamp: "5m",
      likes: 0,
      isLiked: false,
    },
    {
      id: 2,
      user: {
        username: "Mika Johnson",
        avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg",
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisl, eros neque, lorem vel vulputate vitae lorem.",
      timestamp: "5m",
      likes: 0,
      isLiked: false,
    },
    {
      id: 3,
      user: {
        username: "Mika Johnson",
        avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg",
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisl, eros neque, lorem vel vulputate vitae lorem.",
      timestamp: "5m",
      likes: 0,
      isLiked: false,
    },
  ]

  // Handle Post Comment and Enter key press
  const handlePostComment = () => {
    if (!shareMessage.trim()) return; // Don't post empty comments

    // Simulate adding the comment to the state (it could be sent to a backend here)
    const newComment = {
      id: comments.length + 1, // Just generate an ID for new comment (backend will return the real ID)
      user: {
        username: "Current User", // Replace with logged-in user info
        avatar: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg", // Replace with logged-in user avatar
      },
      content: shareMessage,
      timestamp: "Just now",
      likes: 0,
      isLiked: false,
    }

    // Update the state with the new comment
    setComments([newComment, ...comments])

    // Clear the textarea after posting
    setShareMessage("")
  }

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent the default "new line" behavior
      handlePostComment();
    }
  }

  // Close the modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose(); // Close the modal if clicked outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside) // Clean up event listener
    }
  }, [onClose])

  // Initially load comments (this can be replaced by an API call)
  useEffect(() => {
    setComments(mockComments); // Set the initial comments from mock data
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/15 flex items-center justify-center z-50 transition-opacity duration-300">
      <div
        ref={popupRef} // Assign ref to the modal container
        className={`bg-white rounded-xl w-[60%] max-h-[90vh] overflow-y-auto transform transition-transform duration-500 ease-out min-w-[420px] ${isOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Comments</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Comments Section */}
        <div className="px-4 py-3 overflow-y-auto max-h-[500px]">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start space-x-3 mb-4">
              <img src={comment.user.avatar} alt={comment.user.username} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">{comment.user.username}</span>
                </div>
                <p className="text-sm text-gray-700 mt-1">{comment.content}</p>
                  <span className="text-sm text-gray-500">{comment.timestamp}</span>
                
                
              </div>
            </div>
          ))}
        </div>

        {/* Comment Input Section */}
        <div className="p-4 border-t border-gray-200">
          <textarea
            value={shareMessage}
            onChange={(e) => setShareMessage(e.target.value)}
            placeholder="Write a comment..."
            onKeyDown={handleKeyPress} // Add key press listener for Enter
            className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="4"
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={handlePostComment} // Post comment when clicked
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium cursor-pointer"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsModal
