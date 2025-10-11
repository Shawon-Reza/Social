"use client"

import { useState } from "react"
import { FaUserPlus, FaComment, FaHeart, FaEllipsisH, FaTrash, FaEye, FaBell } from "react-icons/fa"
import Navbar from "./Navbar"

function Notifications() {
    // Mock notifications data - replace with API call
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            user: {
                name: "Janata Janet",
                avatar: "https://i.pravatar.cc/150?img=1",
            },
            type: "friend_request", // friend_request, comment, like
            content: 'posted in UI/UX Community: "Mobile Apps UI Designer is required for Tech..."',
            timestamp: "12 Minutes ago",
            isRead: false,
        },
        {
            id: 2,
            user: {
                name: "Janata Janet",
                avatar: "https://i.pravatar.cc/150?img=1",
            },
            type: "comment",
            content: 'posted in UI/UX Community: "Mobile Apps UI Designer is required for Tech..."',
            timestamp: "12 Minutes ago",
            isRead: true,
        },
        {
            id: 3,
            user: {
                name: "Janata Janet",
                avatar: "https://i.pravatar.cc/150?img=1",
            },
            type: "like",
            content: 'posted in UI/UX Community: "Mobile Apps UI Designer is required for Tech..."',
            timestamp: "12 Minutes ago",
            isRead: false,
        },
        {
            id: 4,
            user: {
                name: "Janata Janet",
                avatar: "https://i.pravatar.cc/150?img=1",
            },
            type: "friend_request",
            content: 'posted in UI/UX Community: "Mobile Apps UI Designer is required for Tech..."',
            timestamp: "12 Minutes ago",
            isRead: false,
        },
        {
            id: 5,
            user: {
                name: "Janata Janet",
                avatar: "https://i.pravatar.cc/150?img=1",
            },
            type: "comment",
            content: 'posted in UI/UX Community: "Mobile Apps UI Designer is required for Tech..."',
            timestamp: "12 Minutes ago",
            isRead: false,
        },
        {
            id: 6,
            user: {
                name: "Janata Janet",
                avatar: "https://i.pravatar.cc/150?img=1",
            },
            type: "like",
            content: 'posted in UI/UX Community: "Mobile Apps UI Designer is required for Tech..."',
            timestamp: "12 Minutes ago",
            isRead: false,
        },
        {
            id: 7,
            user: {
                name: "Janata Janet",
                avatar: "https://i.pravatar.cc/150?img=1",
            },
            type: "friend_request",
            content: 'posted in UI/UX Community: "Mobile Apps UI Designer is required for Tech..."',
            timestamp: "12 Minutes ago",
            isRead: false,
        },
        {
            id: 8,
            user: {
                name: "Janata Janet",
                avatar: "https://i.pravatar.cc/150?img=1",
            },
            type: "comment",
            content: 'posted in UI/UX Community: "Mobile Apps UI Designer is required for Tech..."',
            timestamp: "12 Minutes ago",
            isRead: true,
        },
        {
            id: 9,
            user: {
                name: "Janata Janet",
                avatar: "https://i.pravatar.cc/150?img=1",
            },
            type: "like",
            content: 'posted in UI/UX Community: "Mobile Apps UI Designer is required for Tech..."',
            timestamp: "12 Minutes ago",
            isRead: false,
        },
    ])

    const [showMenu, setShowMenu] = useState(null)

    // Get icon based on notification type
    const getNotificationIcon = (type) => {
        switch (type) {
            case "friend_request":
                return <FaUserPlus className="text-blue-500 text-lg" />
            case "comment":
                return <FaComment className="text-green-500 text-lg" />
            case "like":
                return <FaHeart className="text-red-500 text-lg" />
            default:
                return <FaBell className="text-gray-500 text-lg" />
        }
    }

    // Handle notification action click
    const handleActionClick = (notificationId, type) => {
        console.log("Notification action clicked:", { notificationId, type })
        const notification = notifications.find((n) => n.id === notificationId)
        console.log("Notification data:", notification)
    }

    // Handle menu toggle
    const handleMenuToggle = (notificationId) => {
        setShowMenu(showMenu === notificationId ? null : notificationId)
        console.log("Menu toggled for notification:", notificationId)
    }

    // Handle mark as read
    const handleMarkAsRead = (notificationId) => {
        setNotifications(notifications.map((n) => (n.id === notificationId ? { ...n, isRead: true } : n)))
        setShowMenu(null)
        console.log("Marked as read:", notificationId)
    }

    // Handle delete notification
    const handleDelete = (notificationId) => {
        setNotifications(notifications.filter((n) => n.id !== notificationId))
        setShowMenu(null)
        console.log("Deleted notification:", notificationId)
    }

    // Handle notification click
    const handleNotificationClick = (notification) => {
        console.log("Notification clicked:", notification)
        // Navigate to the relevant page or show details
    }

    return (
        <div className="bg-gray-100 ">

            <div className="my-7">
                <Navbar></Navbar>
            </div>


            {/* Main part...................... */}

            <div className="min-h-[calc(100vh-100px)] pb-6 px-4 sm:px-6 lg:px-8">
                <div className="container  mx-auto">
                    {/* Header */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Notifications</h1>

                    {/* Notifications List */}
                    <div className="space-y-3">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`bg-gray-50 rounded-lg shadow-sm p-4 sm:p-5 flex items-start gap-3 sm:gap-4 hover:shadow-md transition-shadow ${!notification.isRead ? "border-l-4 border-blue-500" : ""
                                    }`}
                            >
                                {/* User Avatar */}
                                <img
                                    src={notification.user.avatar || "/placeholder.svg"}
                                    alt={notification.user.name}
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0 cursor-pointer"
                                    onClick={() => handleNotificationClick(notification)}
                                />

                                {/* Notification Content */}
                                <div className="flex-1 min-w-0 cursor-pointer" onClick={() => handleNotificationClick(notification)}>
                                    <p className="text-sm sm:text-base text-gray-900">
                                        <span className="font-semibold">{notification.user.name}</span> {notification.content}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{notification.timestamp}</p>
                                </div>

                                {/* Action Icons */}
                                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                                    {/* Type-specific icon */}
                                    <button
                                        onClick={() => handleActionClick(notification.id, notification.type)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                        aria-label={`${notification.type} action`}
                                    >
                                        {getNotificationIcon(notification.type)}
                                    </button>

                                    {/* Menu button */}
                                    <div className="relative">
                                        <button
                                            onClick={() => handleMenuToggle(notification.id)}
                                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                            aria-label="More options"
                                        >
                                            <FaEllipsisH className="text-gray-500 text-lg" />
                                        </button>

                                        {/* Dropdown Menu */}
                                        {showMenu === notification.id && (
                                            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                                                <button
                                                    onClick={() => handleMarkAsRead(notification.id)}
                                                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                                                >
                                                    <FaEye className="text-gray-500" />
                                                    Mark as read
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(notification.id)}
                                                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                                                >
                                                    <FaTrash className="text-red-500" />
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {notifications.length === 0 && (
                        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                            <FaBell className="text-gray-300 text-5xl mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications</h3>
                            <p className="text-gray-500">You're all caught up!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Notifications
