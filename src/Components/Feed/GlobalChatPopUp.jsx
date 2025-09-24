"use client"

import { useState, useRef, useEffect } from "react"
import chatIcon from "../../assets/globalchat.png"
import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"

const GlobalChatPopUp = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([
        {
            id: 1,
            user: "Slim Aarons",
            message: "Who was that photographer you shared with me recently?",
            time: "3:00PM",
            avatar: "/man-profile.jpg",
        },
        {
            id: 2,
            user: "Slim Aarons",
            message: "Who was that photographer you shared with me recently?",
            time: "3:00PM",
            avatar: "/man-profile.jpg",
        },
        {
            id: 3,
            user: "You",
            message: "That's him!",
            time: "3:00PM",
            isOwn: true,
        },
        {
            id: 4,
            user: "Slim Aarons",
            message: "What was his vision statement?",
            time: "3:00PM",
            avatar: "/man-profile.jpg",
        },
        {
            id: 5,
            user: "You",
            message: '"Attractive people doing attractive things in attractive places"',
            time: "3:00PM",
            isOwn: true,
        },
    ])
    const messagesEndRef = useRef(null)
    const popupRef = useRef(null) // Reference for the popup container

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (message.trim()) {
            const newMessage = {
                id: messages.length + 1,
                user: "You",
                message: message.trim(),
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                isOwn: true,
            }
            setMessages([...messages, newMessage])
            setMessage("")
        }
    }

    const handleInputFocus = () => {
        if (!isActive) {
            setIsActive(true)
        }
    }

    const handleClose = () => {
        setIsOpen(false)
        setIsActive(false)
        setMessage("")
    }

    // Close the popup if the user clicks outside of the chat
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                handleClose() // Close chat if clicked outside
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        // Clean up event listener when the component is unmounted
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className="relative">
            <div className="fixed bottom-6 right-6 z-50">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <img src={chatIcon} alt="" className="h-full w-full cursor-pointer" />
                </button>
            </div>

            <div
                ref={popupRef} // Attach the ref to the popup container
                className={`absolute bottom-30 right-10 w-[400px] h-[700px] xl:h-[750px] xl:w-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 transform scale-100" : "opacity-0 transform scale-90"
                    }`}
            >
                {!isActive ? (
                    // Initial popup state
                    <div className=" h-full bg-gradient-to-br from-[#1B3B66] via-[#0057FF] to-[#CAF4F7] flex flex-col justify-between p-6 text-white">
                        <div>
                            <ChatHeader onClose={handleClose} />
                            <div className="text-start mt-10">
                                <h2 className="text-3xl font-semibold mb-2 opacity-70">Join</h2>
                                <p className="text-2xl leading-relaxed opacity-90 font-semibold">
                                    the global chat to talk, share, and connect with everyone in real time.
                                </p>
                            </div>
                        </div>
                        <ChatInput
                            message={message}
                            setMessage={setMessage}
                            onFocus={handleInputFocus}
                            onSend={handleSendMessage}
                        />
                    </div>
                ) : (
                    // Active chat state
                    <div className="h-full flex flex-col transition-all duration-500 ease-in-out">
                        <ChatHeader onClose={handleClose} />
                        <ChatMessages messages={messages} messagesEndRef={messagesEndRef} />
                        <ChatInput
                            message={message}
                            setMessage={setMessage}
                            onFocus={handleInputFocus}
                            onSend={handleSendMessage}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default GlobalChatPopUp
