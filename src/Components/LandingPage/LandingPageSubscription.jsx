import React from 'react'

const LandingPageSubscription = () => {
    return (
        <div className="bg-white pt-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Discover the Right Package
                    <br />
                    for Your <span className="text-blue-600 font-extrabold">Social Media Strategy</span>
                </h2>
                <p className="mt-4 text-gray-500 max-w-xl mx-auto">
                    Choose a plan that offers the right mix of features and support to elevate your socmed game
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-18 max-w-5xl lg:max-w-7xl mx-auto">
                {/* Free Plan */}
                <div className="border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Free</h3>
                    <p className="text-gray-600 mb-6">
                        Experience the power of Craft, publish your content or collaborate with others.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2 mb-6">
                        <li className="flex items-center"><span className="text-[#3B82F6] mr-2">✔</span> Global Chat</li>
                        <li className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Shop</li>
                        <li className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Advertisement</li>
                    </ul>
                    <button className="w-full bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-xl cursor-pointer mt-auto">
                        Sign up for free
                    </button>
                </div>

                {/* Unlimited Plan */}
                <div className="border-2 border-blue-500 rounded-2xl p-6 shadow-lg relative">
                    <span className="absolute top-4 right-4 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">
                        RECOMMENDED
                    </span>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Unlimited</h3>
                    <p className="text-gray-600 mb-6">
                        For growing teams and businesses using Craft to share and collaborate.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2 mb-6">
                        <li className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Global Chat</li>
                        <li className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Shop</li>
                        <li className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Advertisement</li>
                        <li className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Private Chat</li>
                        <li className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Live Video Chat</li>
                        <li className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Full Access of Social Media</li>
                    </ul>
                    <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-700 cursor-pointer">
                        Choose plan ($45)
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LandingPageSubscription