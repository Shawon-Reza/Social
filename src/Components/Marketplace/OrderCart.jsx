"use client"

import { useState } from "react"
import { FaCheckSquare, FaSquare } from "react-icons/fa"
import Navbar from "../Navbar"

function OrderCart() {
    // Mock data - replace with API call
    const [orderList] = useState([
        {
            id: 1,
            name: "Jaket Trucker Denim",
            price: 58.01,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1yhlTpkCnujnhzP-xioiy9RdDQkKLMnMSg&s",
        },
    ])

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            storeId: 1,
            storeName: "Cloth Store",
            name: "Jacket Trucker Denim",
            price: 44.11,
            quantity: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1yhlTpkCnujnhzP-xioiy9RdDQkKLMnMSg&s",
            selected: true,
        },
        {
            id: 2,
            storeId: 1,
            storeName: "Cloth Center",
            name: "Jacket Trucker Denim",
            price: 44.11,
            quantity: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1yhlTpkCnujnhzP-xioiy9RdDQkKLMnMSg&s",
            selected: true,
        },
        // Assuming there might be duplicates, ensure this is unique
    ])

    const [selectedStores, setSelectedStores] = useState({
        1: true,
    })

    // Get unique stores from cart items
    const stores = [
        ...new Set(
            cartItems.map((item) => item.storeId), // Unique store IDs
        ),
    ].map((storeId) => {
        return {
            id: storeId,
            name: cartItems.find((item) => item.storeId === storeId).storeName,
        }
    })

    // Handle store checkbox toggle
    const handleStoreToggle = (storeId) => {
        const newSelectedStores = {
            ...selectedStores,
            [storeId]: !selectedStores[storeId],
        }
        setSelectedStores(newSelectedStores)

        // Update all items from this store
        const updatedItems = cartItems.map((item) => {
            if (item.storeId === storeId) {
                return { ...item, selected: newSelectedStores[storeId] }
            }
            return item
        })
        setCartItems(updatedItems)

        console.log("Store toggle:", { storeId, selected: newSelectedStores[storeId] })
    }

    // Handle individual item checkbox toggle
    const handleItemToggle = (itemId) => {
        const updatedItems = cartItems.map((item) => {
            if (item.id === itemId) {
                console.log("Item toggle:", { itemId, selected: !item.selected })
                return { ...item, selected: !item.selected }
            }
            return item
        })
        setCartItems(updatedItems)

        // Update store checkbox if all items are deselected
        const item = cartItems.find((i) => i.id === itemId)
        const storeItems = updatedItems.filter((i) => i.storeId === item.storeId)
        const allSelected = storeItems.every((i) => i.selected)
        setSelectedStores({
            ...selectedStores,
            [item.storeId]: allSelected,
        })
    }

    // Handle view details
    const handleViewDetails = (order) => {
        console.log("View Details clicked:", order)
    }

    // Calculate subtotal for selected items
    const calculateSubtotal = () => {
        return cartItems
            .filter((item) => item.selected)
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)
    }

    // Handle checkout
    const handleCheckout = () => {
        const selectedItems = cartItems.filter((item) => item.selected)
        console.log("Checkout clicked:", {
            items: selectedItems,
            subtotal: calculateSubtotal(),
            itemCount: selectedItems.length,
        })
    }

    // Get selected item count
    const selectedCount = cartItems.filter((item) => item.selected).length

    return (
        <div>
            <Navbar></Navbar>

            <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
                <div className="2xl:px-44 xl:px-36 lg:px-28 md:px-20 sm:px-14 px-8 space-y-6">
                    {/* Order List Section */}
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Order List</h2>
                        <div className="space-y-4">
                            {orderList.map((order) => (
                                <div key={order.id} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4 flex-1">
                                            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                                <img
                                                    src={order.image || "/placeholder.svg"}
                                                    alt={order.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-1 truncate">{order.name}</h3>
                                                <p className="text-lg sm:text-xl font-bold text-gray-900">${order.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleViewDetails(order)}
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Your Cart Section */}
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Your Cart ({selectedCount})</h2>

                        <div className="space-y-4">
                            {/* Group items by store */}
                            {stores.map((store) => {
                                const storeItems = cartItems.filter((item) => item.storeId === store.id)

                                return (
                                    <div key={store.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                        {/* Store Header */}
                                        <div className="p-4 border-b border-gray-100">
                                            <button
                                                onClick={() => handleStoreToggle(store.id)}
                                                className="flex items-center gap-3 hover:opacity-70 transition-opacity"
                                            >
                                                {selectedStores[store.id] ? (
                                                    <FaCheckSquare className="text-blue-500 text-xl flex-shrink-0" />
                                                ) : (
                                                    <FaSquare className="text-gray-300 text-xl flex-shrink-0" />
                                                )}
                                                <span className="text-sm sm:text-base font-medium text-gray-900">Select</span>
                                            </button>
                                        </div>

                                        {/* Store Items */}
                                        <div className="divide-y divide-gray-100">
                                            {storeItems.map((item) => (
                                                <div key={item.id} className="p-4 sm:p-6">
                                                    <div className="flex items-center gap-4">
                                                        <button onClick={() => handleItemToggle(item.id)} className="flex-shrink-0">
                                                            {item.selected ? (
                                                                <FaCheckSquare className="text-blue-500 text-xl" />
                                                            ) : (
                                                                <FaSquare className="text-gray-300 text-xl" />
                                                            )}
                                                        </button>

                                                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                                            <img
                                                                src={item.image || "/placeholder.svg"}
                                                                alt={item.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>

                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-1 truncate">
                                                                {item.name}
                                                            </h3>
                                                            <p className="text-xs sm:text-sm text-gray-500 mb-2">Subtotal</p>
                                                            <p className="text-base sm:text-lg font-bold text-gray-900">
                                                                ${(item.price * item.quantity).toFixed(2)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Checkout Button */}
                        <button
                            onClick={handleCheckout}
                            disabled={selectedCount === 0}
                            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-lg text-base font-medium transition-colors mt-6"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default OrderCart
