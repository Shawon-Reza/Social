import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiStore } from "react-icons/bi";
import { FaHome, FaUsers, FaComment, FaBell, FaUserFriends } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdExpandLess } from "react-icons/md";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "feed", icon: <FaHome className="w-7 h-7" /> },
    { name: "frient_requests", icon: <FaUserFriends className="w-7 h-7" /> },
    { name: "marketplace", icon: <BiStore className="w-7 h-7" /> },
    { name: "society", icon: <FaUsers className="w-7 h-7" /> },
    { name: "chat", icon: <FaComment className="w-7 h-7" /> },
    { name: "notifications", icon: <FaBell className="w-7 h-7" /> },
  ];

  const profileItems = ["profile", "settings", "logout"];

  return (
    <nav className="bg-yellow-500 px-4 py-2 md:py-4 flex items-center justify-between relative">
      {/* Logo/Brand */}
      <div className="flex items-center space-x-2 w-1/3">
        <div className="w-6 h-6 bg-blue-500 rounded"></div>
        <span className="text-gray-800 font-semibold text-lg">Square</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 items-center justify-between">
        {/* Navigation Icons */}
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={`/${item.name}`}
              className={({ isActive }) =>
                `p-2 rounded-lg transition-colors ${
                  isActive ? "bg-yellow-400" : "hover:bg-yellow-400"
                }`
              }
              title={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            >
              {item.icon}
            </NavLink>
          ))}
        </div>

        {/* Search */}
        <form className="flex-1 max-w-md mx-8 hidden lg:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search person"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pr-10 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 text-gray-700 placeholder-gray-500"
            />
            <IoMdSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-7 h-7 cursor-pointer" />
          </div>
        </form>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 p-2 hover:bg-yellow-400 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">U</span>
              </div>
              <MdExpandLess
                size={28}
                className={`text-gray-700 cursor-pointer ${isProfileOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                {profileItems.map((item) => (
                  <NavLink
                    key={item}
                    to={`/${item}`}
                    className={({ isActive }) =>
                      `block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                        isActive ? "font-semibold" : ""
                      }`
                    }
                    onClick={() => setIsProfileOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-yellow-400 rounded-lg">
          <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-22 left-0 w-full bg-yellow-500 shadow-md flex flex-col p-4 space-y-3 md:hidden z-50">
          <form className="flex-1">
            <input
              type="text"
              placeholder="Search person"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </form>
          {navItems.concat(profileItems).map((item) => (
            <NavLink
              key={item.name || item}
              to={`/${item.name || item}`}
              className={({ isActive }) =>
                `cursor-pointer text-left px-4 py-2 rounded-lg hover:bg-yellow-400 text-gray-800 ${
                  isActive ? "font-semibold" : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
