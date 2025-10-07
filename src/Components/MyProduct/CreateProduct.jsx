"use client"

import { useState } from "react"
import { FaImage, FaTimes } from "react-icons/fa"
import Navbar from "../Navbar"

function CreateProduct() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  })
  const [mediaFiles, setMediaFiles] = useState([])

  // Mock seller data - replace with actual user data from backend
  const seller = {
    name: "Ahmad Nur Fawaid",
    avatar: "https://i.pravatar.cc/150?img=12",
    shopName: "Sell in this shop",
  }

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    console.log(`[v0] ${name} updated:`, value)
  }

  // Handle media upload
  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files)
    const newMedia = files.map((file) => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file),
    }))
    setMediaFiles((prev) => [...prev, ...newMedia])
    console.log("[v0] Media files uploaded:", files)
  }

  // Remove media file
  const removeMedia = (id) => {
    setMediaFiles((prev) => prev.filter((media) => media.id !== id))
    console.log("[v0] Media removed:", id)
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    const productData = {
      ...formData,
      media: mediaFiles,
      seller: seller.name,
      createdAt: new Date().toISOString(),
    }

    console.log("[v0] Product submitted:", productData)

    // Here you would send data to backend
    // Example: await api.createProduct(productData);

    alert("Product posted successfully!")

    // Reset form
    setFormData({ title: "", price: "", description: "" })
    setMediaFiles([])
  }

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>


      <div className="min-h-[calc(100vh-100px)] bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {/* Header */}
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Item for sale</h1>

            {/* Seller Info */}
            <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-gray-200">
              <img
                src={seller.avatar || "/placeholder.svg"}
                alt={seller.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{seller.name}</h3>
                <p className="text-sm text-gray-500">{seller.shopName}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Media Upload Section */}
              <div className="mb-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                  <input
                    type="file"
                    id="media-upload"
                    multiple
                    accept="image/*"
                    onChange={handleMediaUpload}
                    className="hidden"
                  />
                  <label htmlFor="media-upload" className="cursor-pointer flex flex-col items-center">
                    <FaImage className="text-4xl text-blue-500 mb-2" />
                    <span className="text-gray-600 font-medium">Add Media</span>
                  </label>
                </div>

                {/* Media Preview */}
                {mediaFiles.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {mediaFiles.map((media) => (
                      <div key={media.id} className="relative group">
                        <img
                          src={media.preview || "/placeholder.svg"}
                          alt="Preview"
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeMedia(media.id)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <FaTimes className="text-xs" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Required Section */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">Required</h2>
                <p className="text-sm text-gray-500 mb-4">Be as descriptive as possible.</p>

                {/* Title Input */}
                <div className="mb-4">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Price Input */}
                <div className="mb-4">
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="Price"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Description Textarea */}
                <div>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Post Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct
