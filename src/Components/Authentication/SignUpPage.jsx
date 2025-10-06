
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import AuthButton from "./AuthButton";


const SignUpPage = ({ onSwitchToLogin }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        profileName: "",
        email: "",
        phoneNumber: "",
        countryCode: "+1",
        password: "",
        promotionalCode: "",
        gender: "",
        birthMonth: "",
        birthDate: "",
        birthYear: "",
        agreeToShare: false,
        showPassword: false,
    })

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const togglePasswordVisibility = () => {
        setFormData((prev) => ({
            ...prev,
            showPassword: !prev.showPassword,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    const days = Array.from({ length: 31 }, (_, i) => i + 1)
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)

    return (
        <div className="min-h-screen  py-8 px-4">
            <div className="max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto  rounded-lg  p-6">
                <h1 className="text-5xl font-medium text-center text-gray-900 mb-8">Sign up for free</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Profile Name */}
                    <div>
                        <label className="block text-md text-gray-600 mb-2">Profile name</label>
                        <input
                            type="text"
                            name="profileName"
                            value={formData.profileName}
                            onChange={handleInputChange}
                            placeholder="Enter your profile name"
                            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-md text-gray-600 mb-2">Email</label>
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

                    {/* Password */}
                    <div>
                        <label className="block text-md text-gray-600 mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={formData.showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 pr-10 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {formData.showPassword ? "Hide" : "👁"}
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            Use 8 or more characters with a mix of letters, numbers & symbols
                        </p>
                    </div>

                    {/* Promotional Code */}
                    <div>
                        <label className="block text-md text-gray-600 mb-2">Promotional Code</label>
                        <input
                            type="text"
                            name="promotionalCode"
                            value={formData.promotionalCode}
                            onChange={handleInputChange}
                            placeholder="Enter your Promotional Code"
                            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block text-md text-gray-600 mb-3">
                            What's your gender? <span className="text-gray-400">(optional)</span>
                        </label>
                        <div className="flex space-x-6">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === "female"}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="ml-2 text-md text-gray-700">Female</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === "male"}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="ml-2 text-md text-gray-700">Male</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="non-binary"
                                    checked={formData.gender === "non-binary"}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="ml-2 text-md text-gray-700">Non-binary</span>
                            </label>
                        </div>
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label className="block text-md text-gray-600 mb-3">What's your date of birth?</label>
                        <div className="grid grid-cols-3 gap-3">
                            <select
                                name="birthMonth"
                                value={formData.birthMonth}
                                onChange={handleInputChange}
                                className="px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                            >
                                <option value="">Month</option>
                                {months.map((month, index) => (
                                    <option key={month} value={index + 1}>
                                        {month}
                                    </option>
                                ))}
                            </select>
                            <select
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleInputChange}
                                className="px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                            >
                                <option value="">Date</option>
                                {days.map((day) => (
                                    <option key={day} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </select>
                            <select
                                name="birthYear"
                                value={formData.birthYear}
                                onChange={handleInputChange}
                                className="px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                            >
                                <option value="">Year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
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
                            Share my registration data with our content providers for marketing purposes.
                        </label>
                    </div>

                    {/* Terms Agreement */}
                    <p className="text-xs text-gray-500 leading-relaxed">
                        By creating an account, you agree to the{" "}
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
                    <div className="w-full flex justify-start pl-7 py-3">
                        <div className="scale-[1.2] transform origin-top">
                            <ReCAPTCHA
                                sitekey="6LeDKNIrAAAAAAqMzt62vFcRhJPawQNjawiD6MA0"
                                // onChange={onSuccess}
                            />
                        </div>
                    </div>

                  {/* Submit Button */}
                    <AuthButton
                        text="Log In"
                        type="submit"
                        className="w-full "
                    />

                    {/* Switch to Login */}
                    <p className="text-center text-md text-gray-600">
                        Already have an account?{" "}
                        <button 
                        type="button" onClick={()=>navigate('/signin')} className="text-blue-500 hover:text-blue-600 font-medium cursor-pointer">
                            Log in
                        </button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage
