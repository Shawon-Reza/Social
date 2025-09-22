import React from 'react'
import navlogo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

const LandingPageNavbar = () => {
    return (
        <div className="flex justify-between items-center bg-[#0F172A] p-4 rounded-full">
            {/* Left Section: Logo and Title */}
            <div className="flex items-center">
                <figure className="mr-3">
                    <img src={navlogo} alt="Navlogo" className="w-10 h-auto" />
                </figure>
                <h1 className="text-white text-2xl font-bold">Socialcrea</h1>
            </div>
            <div className='text-white space-x-5 text-lg'>
                <NavLink to="/shop">
                    Shop
                </NavLink>
                <NavLink to="/advertisement">
                    Advertisement
                </NavLink>
            </div>

            {/* Right Section: Subscribe Button */}
            <div className="flex items-center">
                <button className="bg-white text-[#0f0f1f] py-2 px-6 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors">
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default LandingPageNavbar;
