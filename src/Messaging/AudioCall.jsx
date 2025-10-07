"use client"

import { useState, useEffect } from "react"
import { FaMicrophone, FaMicrophoneSlash, FaVideo } from "react-icons/fa"
import Navbar from "../Components/Navbar"

function AudioCall({ callData, onEndCall }) {
    const [isMuted, setIsMuted] = useState(false)
    const [callDuration, setCallDuration] = useState(0)

    // Mock data structure - replace with actual backend data
    const defaultCallData = {
        mainUser: {
            id: 1,
            name: "Michael Simon",
            avatar: "https://i.pravatar.cc/300?img=12",
            status: "active",
        },
        otherParticipants: [
            {
                id: 2,
                name: "Elizabeth Julia",
                avatar: "https://i.pravatar.cc/300?img=5",
                status: "active",
            },
        ],
        callType: "audio",
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

    // Format duration as MM:SS
    const formatDuration = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
    }

    const handleToggleMute = () => {
        setIsMuted(!isMuted)
        console.log("Microphone toggled:", !isMuted ? "Muted" : "Unmuted")
        console.log("Call Data:", activeCallData)
    }

    const handleSwitchToVideo = () => {
        console.log("Switching to video call")
        console.log("Call Data:", activeCallData)
        // Add logic to switch to video call
    }

    const handleEndCall = () => {
        console.log("Call ended")
        console.log("Call Duration:", formatDuration(callDuration))
        console.log("Call Data:", activeCallData)
        if (onEndCall) onEndCall()
    }

    return (
        <div className="min-h-[calc(100vh-110px)]">

            <div>
                <Navbar></Navbar>
            </div>

            <div className="min-h-[calc(100vh-100px)] bg-gray-50 flex items-center justify-center p-4">
                <div className="w-full container mx-auto">
                    {/* Main Call Area */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-6">
                        <div className="flex flex-col items-center">
                            {/* Main User Avatar */}
                            <div className="relative mb-6">
                                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
                                    <img
                                        src={activeCallData.mainUser.avatar || "/placeholder.svg"}
                                        alt={activeCallData.mainUser.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Microphone Icon Overlay */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
                                    <FaMicrophone className="text-blue-500 text-xl" />
                                </div>
                            </div>

                            {/* User Name */}
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">{activeCallData.mainUser.name}</h2>

                            {/* Call Duration */}
                            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-600">{formatDuration(callDuration)}</span>
                            </div>
                        </div>

                        {/* Other Participants */}
                        {activeCallData.otherParticipants && activeCallData.otherParticipants.length > 0 && (
                            <div className="flex justify-end mt-8 -mb-4">
                                {activeCallData.otherParticipants.map((participant) => (
                                    <div key={participant.id} className="text-center">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-gray-200 shadow-md">
                                            <img
                                                src={participant.avatar || "/placeholder.svg"}
                                                alt={participant.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 mt-2">{participant.name}</p>
                                    </div>
                                ))}
                            </div>
                        )}
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

                                {/* Switch to Video Button */}
                                <button
                                    onClick={handleSwitchToVideo}
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-all shadow-lg"
                                >
                                    <FaVideo className="text-white text-lg sm:text-xl" />
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

export default AudioCall
