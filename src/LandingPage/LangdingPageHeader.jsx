import React from 'react'
import logo from '../assets/Image.png'

const LangdingPageHeader = () => {
    return (
        <div className=" px-12 pt-20">
            {/* Main Section */}
            <div className="text-center">
                <h1 className="text-7xl font-extrabold text-gray-900 mb-4">
                    Maximize Your Social Reach with <span className="text-blue-600">Global Creole Society</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Manage all your social media channels effortlessly with our intuitive tools, comprehensive analytics, and expert support, ensuring you stay ahead in the ever-evolving digital landscape.
                </p>
                <a href="#learn-more" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-all">
                    Learn more →
                </a>
            </div>

            {/* Notifications Section */}
            <div>
                <div>
                    <h3>Notifications</h3>
                    <div></div>
                </div>
                <div>
                    <figure className=''>
                        <img src={logo} alt="Notification Images" className="mx-auto mt-8  border-b-0" />
                    </figure>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default LangdingPageHeader