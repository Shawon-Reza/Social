import { useState } from "react"
import ChatSidebar from "./ChatSidebar"
import ChatWindow from "./ChatWindow"
import Navbar from "../Components/Navbar"

function ChatApp() {
    // Mock data - replace with API calls
    const [chats] = useState([
        {
            id: 1,
            userId: "user123",
            name: "Jubayer Ahmad",
            avatar: "https://i.pravatar.cc/150?img=1",
            lastMessage: "Hi there, nice to meet...",
            timestamp: "11:00 AM",
            unread: true,
            isActive: true,
        },
        {
            id: 2,
            userId: "user124",
            name: "Jubayer Ahmad",
            avatar: "https://i.pravatar.cc/150?img=2",
            lastMessage: "Hi there, nice to meet...",
            timestamp: "11:00 AM",
            unread: true,
            isActive: false,
        },
        {
            id: 3,
            userId: "user125",
            name: "Jubayer Ahmad",
            avatar: "https://i.pravatar.cc/150?img=3",
            lastMessage: "Hi there, nice to meet...",
            timestamp: "11:00 AM",
            unread: true,
            isActive: false,
        },
        {
            id: 4,
            userId: "user126",
            name: "Jubayer Ahmad",
            avatar: "https://i.pravatar.cc/150?img=4",
            lastMessage: "Hi there, nice to meet...",
            timestamp: "11:00 AM",
            unread: true,
            isActive: false,
        },
        {
            id: 5,
            userId: "user127",
            name: "Jubayer Ahmad",
            avatar: "https://i.pravatar.cc/150?img=5",
            lastMessage: "Hi there, nice to meet...",
            timestamp: "11:00 AM",
            unread: true,
            isActive: false,
        },
        {
            id: 6,
            userId: "user128",
            name: "Jubayer Ahmad",
            avatar: "https://i.pravatar.cc/150?img=6",
            lastMessage: "Hi there, nice to meet...",
            timestamp: "11:00 AM",
            unread: false,
            isActive: false,
        },
        {
            id: 7,
            userId: "user129",
            name: "Jubayer Ahmad",
            avatar: "https://i.pravatar.cc/150?img=7",
            lastMessage: "Hi there, nice to meet...",
            timestamp: "11:00 AM",
            unread: false,
            isActive: false,
        },
    ])

    const [messages] = useState([
        {
            id: 1,
            senderId: "user456",
            senderName: "Anan Thomas",
            text: "I want to make an appointment tomorrow from 2:00 to 5:00pm?",
            timestamp: "1:55pm",
            isOwn: false,
        },
        {
            id: 2,
            senderId: "currentUser",
            senderName: "You",
            text: "Hello, Thomas! I will check the schedule and inform you",
            timestamp: "3:02pm",
            isOwn: true,
        },
        {
            id: 3,
            senderId: "user456",
            senderName: "Anan Thomas",
            text: "Ok, Thanks for your reply.",
            timestamp: "1:55pm",
            isOwn: false,
        },
        {
            id: 4,
            senderId: "currentUser",
            senderName: "You",
            text: "You are welcome!",
            timestamp: "3:00pm",
            isOwn: true,
        },
        {
            id: 5,
            senderId: "user456",
            senderName: "Anan Thomas",
            text: "Ok, Thanks for your reply.",
            timestamp: "1:55pm",
            isOwn: false,
        },
        {
            id: 6,
            senderId: "currentUser",
            senderName: "You",
            text: "You are welcome!",
            timestamp: "3:00pm",
            isOwn: true,
        },
    ])

    const [selectedChat, setSelectedChat] = useState(chats[0])
    const [filter, setFilter] = useState("all") // 'all' or 'unread'

    const handleChatSelect = (chat) => {
        setSelectedChat(chat)
        console.log("Selected chat:", chat)
    }

    const handleFilterChange = (filterType) => {
        setFilter(filterType)
        console.log("Filter changed to:", filterType)
    }

    const handleSendMessage = (messageText) => {
        console.log("Sending message:", messageText)
        console.log("To user:", selectedChat.name)
        // Here you would make an API call to send the message
        // Example: await sendMessageAPI(selectedChat.userId, messageText);
    }

    const filteredChats = filter === "unread" ? chats.filter((chat) => chat.unread) : chats

    return (
        <div className="min-h-screen  bg-gray-100">
            <div className="py-7">
                <Navbar></Navbar>
            </div>
            <div className="flex h-[calc(100vh-160px)]  ">
                <ChatSidebar
                    chats={filteredChats}
                    selectedChat={selectedChat}
                    onChatSelect={handleChatSelect}
                    filter={filter}
                    onFilterChange={handleFilterChange}
                />
                <ChatWindow chat={selectedChat} messages={messages} onSendMessage={handleSendMessage} />
            </div>
        </div>
    )
}

export default ChatApp
