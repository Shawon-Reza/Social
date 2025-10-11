import React, { useState } from "react"
import { Heart, MessageCircle } from "lucide-react"
import { FaShareFromSquare } from "react-icons/fa6"

const PendingPostCard = ({ post, onComment, onShare }) => {
    const [isLiked, setIsLiked] = useState(post.isLiked)
    const [likesCount, setLikesCount] = useState(post.likes)

    const handleLike = () => {
        const newLikedState = !isLiked
        setIsLiked(newLikedState)
        setLikesCount((prev) => (newLikedState ? prev + 1 : prev - 1))
    }

    return (
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm transform transition-transform duration-700 ease-out hover:scale-102">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                    <img
                        src={post.user.avatar || "/placeholder.svg"}
                        alt={post.user.username}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-900">{post.user.username}</h3>
                        <p className="text-sm text-gray-500">{post.user.timestamp}</p>
                    </div>
                </div>
                <button
                    onClick={onShare}
                    className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transform transition-transform duration-700 ease-out hover:scale-120"
                >
                    <FaShareFromSquare className="w-4 h-4 text-gray-500" />
                </button>
            </div>

            <div className="mb-3">
                <p className="text-gray-800 mb-3">{post.content}</p>
                {post.image && (
                    <img
                        src={post.image || "/placeholder.svg"}
                        alt="Post content"
                        className="w-full rounded-lg object-cover max-h-96"
                    />
                )}
            </div>

            <div className="flex items-center justify-between gap-5  pt-3 border-t border-gray-100 ">
                <button className="border border-[#1E75FF] w-1/2 rounded-lg text-black py-1 hover:shadow-2xl cursor-pointer">Decline</button>
                <button className="border border-[#1E75FF] bg-[#1E75FF] w-1/2 rounded-lg text-white py-1 hover:shadow-2xl cursor-pointer"  >Approve</button>
            </div>
        </div>
    )
}

export default PendingPostCard
