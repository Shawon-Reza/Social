import { useState } from "react";
import LandingPageNavbar from "./LandingPageNavbar";
import ReCAPTCHA from "react-google-recaptcha";


const LandingPageAdsRequest = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        email: "",
        phoneNumber: "",
        countryCode: "+1",
        ownerName: "",
        title: "",
        description: "",
        agreeToShare: false,
        mediaFiles: [],
        time : "",
        price: ""

    })

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files)
        setFormData((prev) => ({
            ...prev,
            mediaFiles: files,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Data:", formData)

        // If there are files, log them separately
        if (formData.mediaFiles.length > 0) {
            console.log("Uploaded Files:", formData.mediaFiles)
        }
    }
    const onSuccess = (value) => {
        console.log("Captcha value:", value);
    }

    return (
        <div className="min-h-screen  py-8 px-4">
            <div>
                <LandingPageNavbar></LandingPageNavbar>
            </div>
            <div className="max-w-2xl lg:max-w-4xl mx-auto  rounded-lg  p-6">
                <h1 className="text-5xl font-medium text-center text-gray-900 mb-8">Advertisement</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Company Name */}
                    <div>
                        <label className="block text-md text-gray-600 mb-2">Company name</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Enter your company name"
                            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-xl text-gray-600 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-md text-gray-600 mb-2">Phone number</label>
                        <div className="flex">
                            <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleInputChange}
                                className="px-3 py-2 border border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                            >
                                <option value="+1">🇺🇸 +1</option>
                                <option value="+44">🇬🇧 +44</option>
                                <option value="+91">🇮🇳 +91</option>
                                <option value="+86">🇨🇳 +86</option>
                            </select>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="Phone number"
                                className="flex-1 px-3 py-2 border border-l-0 border-gray-200 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Add Media */}
                    <div>
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                            <div className="mb-4">
                                <svg className="mx-auto h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    />
                                </svg>
                            </div>
                            <p className="text-md text-gray-600 mb-2">Add Media</p>
                            <input
                                type="file"
                                multiple
                                accept="image/*,video/*"
                                onChange={handleFileChange}
                                className="hidden"
                                id="media-upload"
                            />
                            <label htmlFor="media-upload" className="cursor-pointer text-blue-500 hover:text-blue-600 text-md">
                                Click to upload files
                            </label>
                            {formData.mediaFiles.length > 0 && (
                                <p className="text-xs text-gray-500 mt-2">{formData.mediaFiles.length} file(s) selected</p>
                            )}
                        </div>
                    </div>

                    {/* Owner Name */}
                    <div>
                        <label className="block text-md text-gray-600 mb-2">Owner name</label>
                        <input
                            type="text"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleInputChange}
                            placeholder="Enter your owner name"
                            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div className="flex justify-between gap-5">
                        <div className="w-1/2">
                            <label className="block text-md text-gray-600 mb-2">Time</label>
                            <input
                                type="number"
                                name="time"
                                value={formData.time}
                                onChange={handleInputChange}
                                placeholder=" How many days you want to run"
                                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="w-1/2">
                            <label className="block text-md text-gray-600 mb-2">Per day Price in USD</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                placeholder="USD"
                                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <div>
                        <label className="block text-md text-gray-600 mb-2">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Enter title"
                            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-md text-gray-600 mb-2">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Enter your description"
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="flex items-start space-x-3">
                        <input
                            type="checkbox"
                            name="agreeToShare"
                            checked={formData.agreeToShare}
                            onChange={handleInputChange}
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label className="text-md text-gray-600 leading-relaxed">
                            Share the registration data with our content providers for marketing purposes.
                        </label>
                    </div>

                    {/* Terms Agreement */}
                    <p className="text-xs text-gray-500 leading-relaxed">
                        By clicking on account, you agree to the{" "}
                        <a href="#" className="text-blue-500 hover:text-blue-600">
                            Terms of use
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-500 hover:text-blue-600">
                            Privacy Policy
                        </a>
                        .
                    </p>

                    {/* reCAPTCHA Placeholder */}
                    <div className="w-full flex justify-start pl- py-3">
                        <div className="scale-[1] transform origin-top">
                            <ReCAPTCHA
                                sitekey="6LeDKNIrAAAAAAqMzt62vFcRhJPawQNjawiD6MA0"
                                onChange={onSuccess}
                            />
                        </div>
                    </div>



                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gray-400 hover:bg-gray-500 text-white font-medium py-3 px-4 rounded-full transition duration-200 cursor-pointer"
                    >
                        Continue
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LandingPageAdsRequest

