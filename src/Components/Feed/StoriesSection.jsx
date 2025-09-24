import React, { use } from "react"
import { Plus } from "lucide-react"
import { useNavigate } from "react-router-dom";

const StoriesSection = ({ stories, onStoryClick }) => {
  const navigate = useNavigate();


  const handleStoryClick = (story) => {
    console.log("[v0] Story clicked:", story)
    navigate(`/feed/${story.id}`);
  }


  const handleCreateStoryClick = (story) => {
    console.log("[v0] Story clicked:", story)

  }



  return (
    <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <div key={story.id} className="flex-shrink-0 cursor-pointer" >
            {story.type === "add" ? (
              <div
                onClick={() => handleCreateStoryClick(story)}
                className="flex flex-col items-center">

                <div className="w-32 h-38 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center hover:border-blue-400 transition-colors">
                  <Plus className="w-6 h-6 text-gray-400" />
                </div>
                <span className="text-xs text-gray-600 mt-2 text-center max-w-16 truncate">{story.title}</span>

              </div>
            ) : (
              <div className="flex flex-col items-center">

                <div
                  onClick={() => handleStoryClick(story)}
                  className={`w-32 h-38 rounded-xl p-0.5 ${story.hasStory ? "bg-gradient-to-r from-pink-500 to-orange-500" : "bg-gray-300"}`}
                >
                  <img
                    src={story.avatar || "/placeholder.svg"}
                    alt={story.username}
                    className="w-full h-full rounded-full object-cover border-2 border-white"
                  />
                </div>

                <span className="text-xs text-gray-600 mt-2 text-center max-w-16 truncate">{story.username}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default StoriesSection
