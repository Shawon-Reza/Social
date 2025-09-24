"use client"

import { useState, useRef, useEffect } from "react"
import Navbar from "../Navbar"
import { FaRegHeart, FaRegShareSquare } from "react-icons/fa"
import { BiMessage } from "react-icons/bi"
import { MdExpandLess } from "react-icons/md"

const Reels = () => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

  const reelsData = [
    {
      id: 1,
      videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      user: {
        username: "Global Create Society",
        handle: "Asd",
        avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec et mauris vel ipsum...",
      likes: 5000,
      comments: 600,
      shares: 120,
      isLiked: false,
    },
    {
      id: 2,
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      user: {
        username: "Creative Artist",
        handle: "artist_pro",
        avatar: "https://media.istockphoto.com/id/1285124274/photo/middle-age-man-portrait.jpg?s=612x612&w=0&k=20&c=D14m64UChVZyRhAr6MJW3guo7MKQbKvgNVdKmsgQ_1g=",
      },
      description: "Amazing street art in downtown! Check out this incredible mural that tells a story...",
      likes: 3200,
      comments: 450,
      shares: 89,
      isLiked: true,
    },
    {
      id: 3,
      videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      user: {
        username: "Nature Explorer",
        handle: "nature_love",
        avatar: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?semt=ais_hybrid&w=740&q=80",
      },
      description: "Golden hour magic! This sunset view from the mountains is absolutely breathtaking...",
      likes: 7800,
      comments: 890,
      shares: 234,
      isLiked: false,
    },
  ]

  const [reels, setReels] = useState(reelsData)

  const currentReel = reels[currentReelIndex]
  const isVideo = currentReel.videoUrl.endsWith(".mp4") || currentReel.videoUrl.includes("video")

  const handleLike = () => {
    const updatedReels = [...reels]
    updatedReels[currentReelIndex] = {
      ...updatedReels[currentReelIndex],
      isLiked: !updatedReels[currentReelIndex].isLiked,
      likes: updatedReels[currentReelIndex].isLiked
        ? updatedReels[currentReelIndex].likes - 1
        : updatedReels[currentReelIndex].likes + 1,
    }
    setReels(updatedReels)
  }

  const handleComment = () => {
    console.log("Opening comments for reel:", currentReel.id)
  }

  const handleShare = () => {
    console.log("Sharing reel:", currentReel.id)
  }

  const goToNextReel = () => {
    if (currentReelIndex < reels.length - 1) {
      setCurrentReelIndex(currentReelIndex + 1)
    }
  }

  const goToPreviousReel = () => {
    if (currentReelIndex > 0) {
      setCurrentReelIndex(currentReelIndex - 1)
    }
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const formatCount = (count) => {
    return count >= 1000 ? (count / 1000).toFixed(1) + "K+" : count.toString()
  }

  useEffect(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }, [currentReelIndex])

  // Scroll + keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") goToNextReel()
      if (e.key === "ArrowUp") goToPreviousReel()
    }

    let scrollTimeout = null
    const handleScroll = (e) => {
      if (scrollTimeout) return

      if (e.deltaY > 0) goToNextReel()
      else if (e.deltaY < 0) goToPreviousReel()

      scrollTimeout = setTimeout(() => {
        scrollTimeout = null
      }, 300) // debounce
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("wheel", handleScroll)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("wheel", handleScroll)
    }
  }, [currentReelIndex])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div>
        <Navbar />
      </div>
      <div className=" absolute right-[7%] top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-10">
        <button
          onClick={goToPreviousReel}
          disabled={currentReelIndex === 0}
          className={`w-14 h-14 cursor-pointer rounded-full flex items-center justify-center transition-colors duration-200 ${currentReelIndex === 0
            ? "bg-gray-600/50 text-[#3B82F6] cursor-not-allowed"
            : " text-black hover:bg-[#196aee] hover:text-white border-3 border-[#3B82F6]"
            }`}
        >
          <MdExpandLess size={40} />

        </button>
        <button
          onClick={goToNextReel}
          disabled={currentReelIndex === reels.length - 1}
          className={`cursor-pointer w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-200 ${currentReelIndex === reels.length - 1
            ? "bg-gray-600/50 text-[#3B82F6] cursor-not-allowed"
            : " text-black hover:bg-[#196aee] hover:text-white border-3 border-[#3B82F6]"
            }`}
        >
          <MdExpandLess size={40} className="rotate-180" />
        </button>
      </div>
      {/* Header */}
      <div className="absolute top-20 left-0 right-0 z-20 ">
        <div className="flex items-center justify-center py-4">
          <h1 className="text-white text-xl font-semibold">Reels</h1>
        </div>
      </div>

      {/* Media Container */}
      <div className="py-5 sm:w-[80%] lg:w-[50%] mx-auto h-[calc(100vh-90px)] flex items-center justify-center rounded-2xl relative">
        {isVideo ? (
          <video
            ref={videoRef}
            src={currentReel.videoUrl}
            className="w-full h-full object-cover rounded-2xl"
            loop

            autoPlay
            onClick={togglePlayPause}
          />
        ) : (
          <div
            className="absolute w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${currentReel.videoUrl}')` }}
            onClick={togglePlayPause}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute right-4 bottom-32 flex flex-col items-center space-y-6 z-10">
          {/* Like */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleLike}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${currentReel.isLiked ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-white/30 cursor-pointer"
                }`}
            >
              <FaRegHeart size={20} />
            </button>
            <span className="text-white text-xs mt-1 font-medium">{formatCount(currentReel.likes)}</span>
          </div>

          {/* Comment */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleComment}
              className="w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center cursor-pointer"
            >
              <BiMessage size={20} />
            </button>
            <span className="text-white text-xs mt-1 font-medium">{formatCount(currentReel.comments)}</span>
          </div>

          {/* Share */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleShare}
              className="w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center cursor-pointer"
            >
              <FaRegShareSquare size={20} />
            </button>
            <span className="text-white text-xs mt-1 font-medium">{formatCount(currentReel.shares)}</span>
          </div>
        </div>

        {/* User Info & Description */}
        <div className="absolute  bottom-5 left-0 right-0 z-10 bg-gradient-to-t rounded-2xl from-black/70 to-transparent">
          <div className="p-4 pb-8">
            <div className="flex items-center space-x-3 mb-3">
              <img
                src={currentReel.user.avatar || "/placeholder.svg"}
                alt={currentReel.user.username}
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div>
                <h3 className="text-white font-semibold text-md">{currentReel.user.username}</h3>
                <p className="text-white/80 text-sm">@{currentReel.user.handle}</p>
              </div>
              <div>
                <button className="ml-5 px-2 p-1 border border-white/60 text-white rounded-xl cursor-pointer hover:shadow-2xl hover:scale-103"> Add</button>
              </div>
            </div>
            <p className="text-white text-md leading-relaxed">{currentReel.description}</p>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
          {reels.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentReelIndex ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reels
