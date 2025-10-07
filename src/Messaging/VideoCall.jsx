"use client"

import { useState, useEffect } from "react"
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaDesktop, FaExpand, FaVolumeUp } from "react-icons/fa"
import Navbar from "../Components/Navbar"

function VideoCall({ callData, onEndCall }) {
    const [isMuted, setIsMuted] = useState(false)
    const [isVideoOn, setIsVideoOn] = useState(true)
    const [isScreenSharing, setIsScreenSharing] = useState(false)
    const [callDuration, setCallDuration] = useState(0)

    // Mock data structure - replace with actual backend data
    const defaultCallData = {
        mainUser: {
            id: 1,
            name: "Adam Joseph",
            avatar: "https://i.pravatar.cc/600?img=13",
            videoStream: "https://i.pravatar.cc/600?img=13", // Replace with actual video stream
            status: "active",
        },
        otherParticipants: [
            {
                id: 2,
                name: "Cassie Jung",
                avatar: "https://i.pravatar.cc/300?img=9",
                videoStream: "https://i.pravatar.cc/300?img=9", // Replace with actual video stream
                status: "active",
            },
        ],
        callType: "video",
        startTime: new Date(),
    }

    const activeCallData = callData || defaultCallData

    // Call duration timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCallDuration((prev) => prev + 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const handleToggleMute = () => {
        setIsMuted(!isMuted)
        console.log("Microphone toggled:", !isMuted ? "Muted" : "Unmuted")
        console.log("Call Data:", activeCallData)
    }

    const handleToggleVideo = () => {
        setIsVideoOn(!isVideoOn)
        console.log("Video toggled:", !isVideoOn ? "Off" : "On")
        console.log("Call Data:", activeCallData)
    }

    const handleToggleScreenShare = () => {
        setIsScreenSharing(!isScreenSharing)
        console.log("Screen sharing toggled:", !isScreenSharing ? "Started" : "Stopped")
        console.log("Call Data:", activeCallData)
    }

    const handleFullscreen = () => {
        console.log("Fullscreen toggled")
        // Add fullscreen logic
    }

    const handleEndCall = () => {
        console.log("Call ended")
        console.log("Call Duration:", callDuration, "seconds")
        console.log("Call Data:", activeCallData)
        if (onEndCall) onEndCall()
    }

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>


            {/* Main part */}
            <div className="min-h-[calc(100vh-100px)] man-h-[calc(100vh-100px)]
 bg-gray-100 flex items-center justify-center p-4">

                <div className="w-full container mx-auto man-h-[calc(100vh-100px)]">
                    {/* Video Area */}
                    <div
                        className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-6"
                        style={{ aspectRatio: "16/9" }}
                    >
                        {/* Main Video Feed */}
                        <div className="absolute inset-0">
                            <img
                                src={activeCallData.mainUser.videoStream || "/placeholder.svg"}
                                alt={activeCallData.mainUser.name}
                                className="w-full h-full object-cover"
                            />
                            {/* User Name Overlay */}
                            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-3 py-1.5 rounded-full">
                                <span className="text-white text-sm font-medium">{activeCallData.mainUser.name}</span>
                            </div>
                        </div>

                        {/* Participant Thumbnails */}
                        {activeCallData.otherParticipants && activeCallData.otherParticipants.length > 0 && (
                            <div className="absolute top-4 left-4 space-y-3">
                                {activeCallData.otherParticipants.map((participant) => (
                                    <div
                                        key={participant.id}
                                        className="relative w-32 sm:w-40 md:w-48 rounded-lg overflow-hidden shadow-lg border-2 border-white"
                                    >
                                        <img
                                            src={participant.videoStream || "/placeholder.svg"}
                                            alt={participant.name}
                                            className="w-full h-full object-cover"
                                            style={{ aspectRatio: "4/3" }}
                                        />
                                        <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 px-2 py-1 rounded">
                                            <span className="text-white text-xs font-medium">{participant.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Fullscreen Button */}
                        <button
                            onClick={handleFullscreen}
                            className="absolute top-4 right-4 w-10 h-10 bg-gray-800 bg-opacity-70 hover:bg-opacity-90 rounded-full flex items-center justify-center transition-all"
                        >
                            <FaExpand className="text-white text-sm" />
                        </button>

                        {/* Audio Visualizer */}
                        <div className="absolute bottom-4 right-4 w-10 h-10 bg-gray-800 bg-opacity-70 rounded-full flex items-center justify-center">
                            <FaVolumeUp className="text-white text-sm" />
                        </div>
                    </div>

                    {/* Call Controls */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
                        <div className="flex items-center justify-between">
                            {/* Left Controls */}
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                {/* Mute/Unmute Button */}
                                <button
                                    onClick={handleToggleMute}
                                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all ${isMuted ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
                                        } shadow-lg`}
                                >
                                    {isMuted ? (
                                        <FaMicrophoneSlash className="text-white text-lg sm:text-xl" />
                                    ) : (
                                        <FaMicrophone className="text-white text-lg sm:text-xl" />
                                    )}
                                </button>

                                {/* Video On/Off Button */}
                                <button
                                    onClick={handleToggleVideo}
                                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all ${!isVideoOn ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
                                        } shadow-lg`}
                                >
                                    {isVideoOn ? (
                                        <FaVideo className="text-white text-lg sm:text-xl" />
                                    ) : (
                                        <FaVideoSlash className="text-white text-lg sm:text-xl" />
                                    )}
                                </button>

                                {/* Screen Share Button */}
                                <button
                                    onClick={handleToggleScreenShare}
                                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all ${isScreenSharing ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
                                        } shadow-lg`}
                                >
                                    <FaDesktop className="text-white text-lg sm:text-xl" />
                                </button>
                            </div>

                            {/* End Call Button */}
                            <button
                                onClick={handleEndCall}
                                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-red-500 hover:bg-red-600 text-white font-medium rounded-full transition-all shadow-lg"
                            >
                                End Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCall
