"use client"

import { useState, useEffect, useRef } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import Navbar from "../Navbar"

function LiveStream() {
    const [comments, setComments] = useState([
        {
            id: 1,
            userId: "user1",
            userName: "Ahmad Nur Fawaid",
            userAvatar: "https://i.pravatar.cc/150?img=12",
            comment: "Yeah I would love to watch that",
            timestamp: "3 minutes ago",
        },
        {
            id: 2,
            userId: "user1",
            userName: "Ahmad Nur Fawaid",
            userAvatar: "https://i.pravatar.cc/150?img=12",
            comment: "Yeah I would love to watch that",
            timestamp: "3 minutes ago",
        },
        {
            id: 3,
            userId: "user1",
            userName: "Ahmad Nur Fawaid",
            userAvatar: "https://i.pravatar.cc/150?img=12",
            comment: "Yeah I would love to watch that",
            timestamp: "3 minutes ago",
        },
        {
            id: 4,
            userId: "user1",
            userName: "Ahmad Nur Fawaid",
            userAvatar: "https://i.pravatar.cc/150?img=12",
            comment: "Yeah I would love to watch that",
            timestamp: "3 minutes ago",
        },
        {
            id: 5,
            userId: "user1",
            userName: "Ahmad Nur Fawaid",
            userAvatar: "https://i.pravatar.cc/150?img=12",
            comment: "Yeah I would love to watch that",
            timestamp: "3 minutes ago",
        },
    ])

    const [newComment, setNewComment] = useState("")
    const [isLiked, setIsLiked] = useState(false)
    const [isFollowing, setIsFollowing] = useState(false)
    const commentsEndRef = useRef(null)

    // Mock stream data - Replace with API call
    const streamData = {
        id: "stream123",
        title: "Create A Conscious Morning Ritual",
        description:
            "From cultivating intentions, gratitude, and grounding, you will feel a shift in your energy surrounding mornings. Raise your vibration and consciousness and rise with me.",
        isLive: true,
        host: {
            id: "host1",
            name: "Global Creole Society",
            avatar: "https://i.pravatar.cc/150?img=20",
        },
        videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yX6Gs3R7coWtwWJ6qr09Tva0uCrsoJ.png", // Replace with actual video stream URL
        currentUser: {
            id: "currentUser",
            avatar: "https://i.pravatar.cc/150?img=8",
        },
    }

    // Auto-scroll to bottom when new comments arrive
    const scrollToBottom = () => {
        commentsEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [comments])

    // Handle follow/add button
    const handleFollow = () => {
        setIsFollowing(!isFollowing)
        console.log("Follow toggled:", !isFollowing)
        console.log("Host:", streamData.host)
    }

    // Handle like button
    const handleLike = () => {
        setIsLiked(!isLiked)
        console.log("Like toggled:", !isLiked)
        console.log("Stream ID:", streamData.id)
    }

    // Handle comment submission
    const handleSubmitComment = (e) => {
        e.preventDefault()
        if (newComment.trim()) {
            const comment = {
                id: Date.now(),
                userId: streamData.currentUser.id,
                userName: "You",
                userAvatar: streamData.currentUser.avatar,
                comment: newComment,
                timestamp: "Just now",
            }

            setComments([...comments, comment])
            console.log("New comment submitted:", comment)
            console.log("Stream ID:", streamData.id)
            setNewComment("")

            // TODO: Send comment to backend
            // sendCommentToBackend(streamData.id, newComment);
        }
    }

    return (
        <div>

            <div>
                <Navbar></Navbar>
            </div>


            {/* Main Part........... */}
            <div className="relative w-full min-h-[calc(100vh-97px)] bg-gray-900 overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0">
                    <img src={streamData.videoUrl || "/placeholder.svg"} alt="Live Stream" className="w-full h-full object-cover" />
                    {/* You can replace the img with a video element for actual streaming */}
                    {/* <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src={streamData.videoUrl} type="video/mp4" />
        </video> */}
                </div>

                {/* Left Sidebar Overlay */}
                <div className="absolute left-0 top-0 bottom-0 w-full sm:w-96 bg-gradient-to-r from-black/80 via-black/60 to-transparent p-4 sm:p-6 flex flex-col">
                    {/* Live Badge */}
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold flex items-center space-x-1">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            <span>LIVE</span>
                        </div>
                    </div>

                    {/* Stream Info */}
                    <div className="mb-6">
                        <h1 className="text-white text-xl sm:text-2xl font-bold mb-3 leading-tight">{streamData.title}</h1>
                        <p className="text-gray-300 text-sm leading-relaxed">{streamData.description}</p>
                    </div>

                    {/* Host Info */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
                        <div className="flex items-center space-x-3">
                            <img
                                src={streamData.host.avatar || "/placeholder.svg"}
                                alt={streamData.host.name}
                                className="w-10 h-10 rounded-full border-2 border-yellow-500"
                            />
                            <span className="text-white text-sm font-medium">{streamData.host.name}</span>
                        </div>
                        <button
                            onClick={handleFollow}
                            className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${isFollowing ? "bg-gray-600 text-white" : "bg-white text-gray-900 hover:bg-gray-100"
                                }`}
                        >
                            {isFollowing ? "Following" : "Add"}
                        </button>
                    </div>

                    {/* Comments Section */}
                    <div className="flex-1 overflow-y-auto mb-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                        {comments.map((comment) => (
                            <div key={comment.id} className="flex space-x-2">
                                <img
                                    src={comment.userAvatar || "/placeholder.svg"}
                                    alt={comment.userName}
                                    className="w-8 h-8 rounded-full flex-shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-baseline space-x-2">
                                        <span className="text-white text-sm font-medium">{comment.userName}</span>
                                        <span className="text-gray-400 text-xs">{comment.timestamp}</span>
                                    </div>
                                    <p className="text-gray-300 text-sm mt-0.5">{comment.comment}</p>
                                </div>
                            </div>
                        ))}
                        <div ref={commentsEndRef} />
                    </div>

                    {/* Comment Input */}
                    <form onSubmit={handleSubmitComment} className="flex items-center space-x-2">
                        <img
                            src={streamData.currentUser.avatar || "/placeholder.svg"}
                            alt="You"
                            className="w-8 h-8 rounded-full flex-shrink-0"
                        />
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Write a comment..."
                                className="w-full bg-white/90 text-gray-900 placeholder-gray-500 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">Press Enter to post</span>
                        </div>
                        <button
                            type="button"
                            onClick={handleLike}
                            className="flex-shrink-0 text-white hover:scale-110 transition-transform"
                        >
                            {isLiked ? <FaHeart className="text-red-500 text-xl" /> : <FaRegHeart className="text-xl" />}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LiveStream
