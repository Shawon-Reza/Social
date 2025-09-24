import { use, useState } from "react"
import { BiStore } from "react-icons/bi"
import { FaHome, FaPeopleArrows, FaBuilding, FaUsers, FaComment, FaBell, FaUser, FaUserFriends } from "react-icons/fa"
import { IoMdSearch } from "react-icons/io"
import { MdExpandLess } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigate=useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        console.log("Search query:", searchQuery)
    }

    const handleNavClick = (section) => {
        console.log("Navigation clicked:", section)
        navigate("/feed")
        setIsMenuOpen(false) // close menu after clicking
    }

    return (
        <nav className="bg-yellow-500 px-4 py-5 flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-2 w-1/3">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
                <span className="text-gray-800 font-semibold text-lg">Square</span>
            </div>

            {/* Desktop / Tablet Menu */}
            <div className="hidden md:flex flex-1 items-center justify-between">
                {/* Navigation Icons */}
                <div className="flex items-center space-x-6">
                    <button
                        onClick={() => handleNavClick("home")}
                        className="p-2 hover:bg-yellow-400 rounded-lg transition-colors"
                        title="Home"
                    >
                        <FaHome className="w-8 h-8 text-gray-700 cursor-pointer" />
                    </button>

                    <button
                        onClick={() => handleNavClick("people")}
                        className="p-2 hover:bg-yellow-400 rounded-lg transition-colors"
                        title="People"
                    >
                        <FaUserFriends className="w-8 h-8 text-gray-700 cursor-pointer" />
                    </button>

                    <button
                        onClick={() => handleNavClick("company")}
                        className="p-2 hover:bg-yellow-400 rounded-lg transition-colors"
                        title="Company"
                    >
                        <BiStore className="w-8 h-8 text-gray-700 cursor-pointer" />
                    </button>

                    <button
                        onClick={() => handleNavClick("groups")}
                        className="p-2 hover:bg-yellow-400 rounded-lg transition-colors"
                        title="Groups"
                    >
                        <FaUsers className="w-8 h-8 text-gray-700 cursor-pointer" />
                    </button>
                </div>

                {/* Search Bar */}
                <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8 hidden lg:block">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search person"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 pr-10 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 text-gray-700 placeholder-gray-500"
                        />
                        <button
                            type="submit"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            <IoMdSearch className="w-8 h-8 cursor-pointer" />
                        </button>
                    </div>
                </form>

                {/* Right Side Icons */}
                <div className="flex items-center space-x-4">
                    {/* Chat Icon */}
                    <button
                        onClick={() => handleNavClick("chat")}
                        className="p-2 hover:bg-yellow-400 rounded-lg transition-colors"
                        title="Messages"
                    >
                        <FaComment className="w-8 h-8 text-gray-700 cursor-pointer" />
                    </button>

                    {/* Notification Icon */}
                    <button
                        onClick={() => handleNavClick("notifications")}
                        className="p-2 hover:bg-yellow-400 rounded-lg transition-colors relative"
                        title="Notifications"
                    >
                        <FaBell className="w-8 h-8 text-gray-700 cursor-pointer" />
                    </button>

                    {/* Profile Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center space-x-2 p-2 hover:bg-yellow-400 rounded-lg transition-colors"
                        >
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-gray-600">U</span>
                            </div>
                            <MdExpandLess size={28} className={`text-gray-700 cursor-pointer ${isProfileOpen ? "rotate-180" : ""}`} />
                        </button>

                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                                <button
                                    onClick={() => {
                                        handleNavClick("profile");
                                        setIsProfileOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Profile
                                </button>
                                <button
                                    onClick={() => {
                                        handleNavClick("settings");
                                        setIsProfileOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Settings
                                </button>
                                <hr className="my-1" />
                                <button
                                    onClick={() => {
                                        handleNavClick("logout");
                                        setIsProfileOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 hover:bg-yellow-400 rounded-lg"
                >
                    <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-28 left-0 w-full bg-yellow-500 shadow-md flex flex-col p-4 space-y-3 md:hidden z-50">
                    <form onSubmit={handleSearch} className="flex-1">
                        <input
                            type="text"
                            placeholder="Search person"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 rounded-full bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                    </form>

                    {["home", "people", "company", "groups", "chat", "notifications", "profile", "settings", "logout"].map(
                        (item) => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className="text-left px-4 py-2 rounded-lg hover:bg-yellow-400 text-gray-800"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </button>
                        )
                    )}
                </div>
            )}
        </nav>

    )
}

export default Navbar
