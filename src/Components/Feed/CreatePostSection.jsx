import React, { useState } from "react"
import { Video, ImageIcon } from "lucide-react"

const CreatePostSection = ({ currentUser, onCreatePost }) => {
  const [postText, setPostText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (postText.trim()) {
      onCreatePost({ content: postText })
      setPostText("")
    }
  }

  return (
    <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="flex items-start space-x-3">
          <img
            src={currentUser?.avatar || "/placeholder.svg"}
            alt="Your avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="Write your story today..."
              className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="3"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex space-x-4">
            <button
              type="button"
              className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Video className="w-5 h-5" />
              <span className="text-sm font-medium">Live</span>
            </button>
            <button
              type="button"
              className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <ImageIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Media</span>
            </button>
          </div>
          {postText.trim() && (
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Post
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default CreatePostSection
