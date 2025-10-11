import React, { useState } from 'react'
import Navbar from '../Navbar'
import { FaPlus, FaSearch } from 'react-icons/fa'

const MyProductList = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const [products, setProducts] = useState({
        statuse: "Pending",
        productslist: [
            {
                id: 1,
                name: "Jaket Trucker Denim",
                price: 58.01,
                image: "https://img.freepik.com/free-photo/skin-regeneration-product-still-life_23-2151232228.jpg"

            },
            {
                id: 2,
                name: "Vintage T-Shirt",
                price: 25.99,
                image: "https://img.freepik.com/free-photo/skin-regeneration-product-still-life_23-2151232228.jpg"

            },
            {
                id: 3,
                name: "Designer Sneakers",
                price: 89.99,
                image: "https://img.freepik.com/free-photo/skin-regeneration-product-still-life_23-2151232228.jpg"

            },
            {
                id: 4,
                name: "Winter Jacket",
                price: 120.50,
                image: "https://img.freepik.com/free-photo/skin-regeneration-product-still-life_23-2151232228.jpg"
            }
        ]
    });



    // Handle search
    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
        console.log("[v0] Search query:", e.target.value)
    }

    return (
        <div className='bg-[#F3F4F6] min-h-screen'>
            <div className='py-7'>
                <Navbar></Navbar>
            </div>

            <div className='2xl:px-44 xl:px-36 lg:px-28 md:px-20 sm:px-14 px-8'>
                {/* Search and Actions Bar */}
                <div className="my-10 flex flex-col sm:flex-row gap-3 w-f">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="search your product"
                            className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => {
                                handleOtherList()
                                navigate("/marketplace/orderlist")
                            }}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
                        >
                            Other List
                        </button>
                        <button
                            onClick={() => {
                                handleAddProduct()
                                navigate('/marketplace/myproduct/addproduct')
                            }}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
                        >
                            <FaPlus className="text-sm" />
                            Add Product
                        </button>
                    </div>
                </div>



                {/* Product list based on categories */}
                <div className='space-y-5'>
                    {
                        products?.productslist.map(product => <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                                />
                                <div>

                                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                                    <p className="text-lg font-bold text-gray-900">{product.price}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleViewDetails(product, section)}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                            >
                                View Details
                            </button>
                        </div>)
                    }
                </div>





            </div>



        </div>
    )
}

export default MyProductList