import React, { useState } from 'react';
import { FaUser, FaLock, FaKey, FaPhone, FaEnvelope, FaBirthdayCake, FaChevronRight } from 'react-icons/fa';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';

function ProfileSettings() {
    const [isProfileLocked, setIsProfileLocked] = useState(false);
    const navigate = useNavigate();


    // User data
    const userData = {
        name: "Emon Hasan",
        phone: "+1123654789",
        email: "email@email.com",
        birthday: "October 28, 1990"
    };

    // Handle profile lock toggle
    const handleProfileLockToggle = () => {
        setIsProfileLocked(!isProfileLocked);
        console.log("Profile Lock Status:", !isProfileLocked);
        console.log("User Data:", userData);
    };

    // Handle change password click
    const handleChangePassword = () => {
        console.log("Change Password clicked");
        console.log("Current User:", userData.name);
    };

    // Handle contact info click
    const handleContactInfoClick = () => {
        console.log("Contact Info clicked");
        console.log("Phone:", userData.phone);
    };

    // Handle email click
    const handleEmailClick = () => {
        console.log("Email clicked");
        console.log("Email:", userData.email);
    };

    // Handle birthday click
    const handleBirthdayClick = () => {
        console.log("Birthday clicked");
        console.log("Birthday:", userData.birthday);
    };

    return (
        <div className='bg-gray-100'>

            <div className='py-7'>
                <Navbar></Navbar>
            </div>

            {/* Main part....................... */}
            <div className="min-h-screen  py-6 px-4 sm:px-6 lg:px-8">
                <div className="2xl:px-44 xl:px-36 lg:px-28 md:px-20 sm:px-14 px-8">

                    {/* Profile Section */}
                    <div className="mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Profile</h2>
                        <p className="text-sm sm:text-base text-gray-600 mb-4">
                            Manage your personal information, update your profile details, and control what others see about you.
                        </p>

                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 space-y-4">
                            {/* User Info */}
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                    <FaUser className="text-white text-lg sm:text-xl" />
                                </div>
                                <span className="text-sm sm:text-base font-medium text-gray-900">{userData.name}</span>
                            </div>

                            {/* Lock Profile Toggle */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                        <FaLock className="text-white text-sm sm:text-base" />
                                    </div>
                                    <span className="text-sm sm:text-base font-medium text-gray-900">Lock your profile</span>
                                </div>

                                {/* Toggle Switch */}
                                <button
                                    onClick={handleProfileLockToggle}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 cursor-pointer focus:ring-blue-500 focus:ring-offset-2 ${isProfileLocked ? 'bg-blue-500' : 'bg-gray-300'
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isProfileLocked ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Password Section */}
                    <div className="mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Password</h2>
                        <p className="text-sm sm:text-base text-gray-600 mb-4">
                            Password change allows users to update their current password to a new one, ensuring account security and protecting personal information.
                        </p>

                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                            <button
                                onClick={()=>{
                                    handleChangePassword()
                                    navigate('/settings/profile_settings/chnage_password')
                                }}
                                className="cursor-pointer w-full flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg p-2 -m-2"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                        <FaKey className="text-white text-sm sm:text-base" />
                                    </div>
                                    <span className="text-sm sm:text-base font-medium text-gray-900">Change Password</span>
                                </div>
                                <FaChevronRight className="text-gray-400 text-sm sm:text-base" />
                            </button>
                        </div>
                    </div>

                    {/* Personal Details Section */}
                    <div className="mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Personal details</h2>
                        <p className="text-sm sm:text-base text-gray-600 mb-4">
                            Meta uses this information to verify your identity and to keep our community safe. You decide what personal details you make visible to others.
                        </p>

                        <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-100">
                            {/* Contact Info */}
                            <button
                                onClick={handleContactInfoClick}
                                className="w-full  hover:bg-gray-50 transition-colors p-4 sm:p-6"
                            >
                                <div className="text-left">
                                    <div className="flex justify-between items-center text-sm sm:text-base font-medium text-gray-900 mb-1">
                                        <p>Contact info</p>
                                        <CiEdit size={20} className='cursor-pointer'/>
                                    </div>
                                    <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 ">
                                        <p>{userData.phone}</p>
                                        <button className='text-red-500 cursor-pointer'>Remove</button>
                                    </div>
                                </div>
                            
                            </button>

                            {/* Email */}
                            <button
                                onClick={handleEmailClick}
                                className="w-full flex items-center justify-between hover:bg-gray-50 transition-colors p-4 sm:p-6"
                            >
                                <div className="text-left">
                                    <div className="text-sm sm:text-base font-medium text-gray-900 mb-1">Email</div>
                                    <div className="text-xs sm:text-sm text-gray-500">{userData.email}</div>
                                </div>
                                <FaChevronRight className="text-gray-400 text-sm sm:text-base flex-shrink-0 ml-4" />
                            </button>

                            {/* Birthday */}
                            <button
                                onClick={handleBirthdayClick}
                                className="w-full flex items-center justify-between hover:bg-gray-50 transition-colors p-4 sm:p-6"
                            >
                                <div className="text-left">
                                    <div className="text-sm sm:text-base font-medium text-gray-900 mb-1">Birthday</div>
                                    <div className="text-xs sm:text-sm text-gray-500">{userData.birthday}</div>
                                </div>
                                <FaChevronRight className="text-gray-400 text-sm sm:text-base flex-shrink-0 ml-4" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProfileSettings;