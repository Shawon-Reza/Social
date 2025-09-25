import React, { useState } from "react"
import { Heart, MessageCircle } from "lucide-react"
import { FaShareFromSquare } from "react-icons/fa6"
import ShareModal from "./ShareModal"
import CommentsModal from "./CommentsModal"

const PostCard = ({ post }) => {
    const [isLiked, setIsLiked] = useState(post.isLiked)
    const [likesCount, setLikesCount] = useState(post.likes)
    const [isShareModalOpen, setIsShareModalOpen] = useState(false)
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)

    const handleLike = () => {
        const newLikedState = !isLiked
        setIsLiked(newLikedState)
        setLikesCount((prev) => (newLikedState ? prev + 1 : prev - 1))
    }

    const handleShare = () => {
        setIsShareModalOpen(true)
    }

    const handleComment = () => {
        setIsCommentModalOpen(true)
    }

    const closeShareModal = () => {
        setIsShareModalOpen(false)
    }

    const closeCommentModal = () => {
        setIsCommentModalOpen(false)
    }

    return (
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
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
                    onClick={handleShare}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
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

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center space-x-6">
                    <button
                        onClick={handleLike}
                        className="cursor-pointer flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors"
                    >
                        <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                        <span className="text-sm">{likesCount} Likes</span>
                    </button>
                    <button
                        onClick={handleComment}
                        className="cursor-pointer flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm">{post.comments} Comments</span>
                    </button>
                </div>
            </div>

            {/* Modals */}
            <ShareModal isOpen={isShareModalOpen} onClose={closeShareModal} postId={post.id} />
            <CommentsModal isOpen={isCommentModalOpen} onClose={closeCommentModal} postId={post.id} />
        </div>
    )
}

export default PostCard
