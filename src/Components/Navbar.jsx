import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiStore } from "react-icons/bi";
import { FaHome, FaUsers, FaComment, FaBell, FaUserFriends } from "react-icons/fa";
import { IoMdSearch, IoMdSettings } from "react-icons/io";
import { MdExpandLess } from "react-icons/md";
import SettingPopup from "./Settings/SettingPopup";
import websitelogo from "../assets/websitelogo.png"

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  // Handle the popup.............................
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  // Close modal if clicking outside of the modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) && // Clicked outside modal container
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target) // Clicked outside modal content
      ) {
        handleCloseModal(); // Close modal
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside); // Add event listener
    } else {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up when modal is closed
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up on component unmount
    };
  }, [isModalOpen]);
  // ..................................................


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
    <nav className="bg-yellow-500 px-4 py-2 md:py-4 flex items-center justify-between relative lg:px-20">
      {/* Logo/Brand */}
      <div
      
        className="flex items-center space-x-2 w-1/3">
        <figure>
          <img 
          onClick={()=>{
            navigate("/feed")
          }}
          src={websitelogo} alt="" className="h-10 md:h-12 cursor-pointer  hover:scale-102 transform transition-transform duration-700 ease-in-out" />
        </figure>
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
                `p-2 rounded-lg transition-colors ${isActive ? "bg-yellow-400" : "hover:bg-yellow-400"
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
              className="flex items-center space-x-2 p-2 hover:bg-yellow-400 rounded-lg transition-colors cursor-pointer"


            >

              <img
                className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center object-cover"
                src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />


              <MdExpandLess
                size={28}
                className={`text-gray-700 cursor-pointer ${isProfileOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg py-2 z-50 cursor-pointer">

                <div className="px-2 ">
                  <div

                    onClick={() => {
                      navigate('/profile')
                    }}
                    className="flex gap-3 items-center font-semibold hover:bg-[#E2E8F0] p-2 rounded-xl transform transition-all duration-500 ease-in-out cursor-pointer">
                    <img
                      className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center object-cover"
                      src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <p className="text-lg " >Profile name</p>

                  </div>

                  <div
                    onClick={handleOpenModal}

                    className="flex gap-3 items-center font-semibold hover:bg-[#E2E8F0] p-2 rounded-xl transform transition-all duration-500 ease-in-out cursor-pointer">
                    <IoMdSettings size={30} color="#3B82F6" />
                    <p className="text-lg " >Settting & Support</p>

                  </div>

                </div>
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
                `cursor-pointer text-left px-4 py-2 rounded-lg hover:bg-yellow-400 text-gray-800 ${isActive ? "font-semibold" : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {/* {item.charAt(0).toUpperCase() + item.slice(1)} */}
            </NavLink>
          ))}
        </div>
      )}




      {/* Popup...................................................... */}
      <SettingPopup
        isOpen={isModalOpen} onClose={handleCloseModal}
      ></SettingPopup>


    </nav>
  );
};

export default Navbar;
