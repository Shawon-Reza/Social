"use client"

import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

function ChangePassword({ onBack, userEmail }) {
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
    code: "",
  })

  // Handle password form input change
  const handlePasswordInputChange = (e) => {
    const { name, value } = e.target
    setPasswordForm((prev) => ({
      ...prev,
      [name]: value,
    }))
    console.log(`Password form updated - ${name}:`, value)
  }

  // Handle send code
  const handleSendCode = () => {
    console.log("Send verification code clicked")
    console.log("Sending code to:", userEmail)
  }

  // Handle password change submit
  const handlePasswordChangeSubmit = (e) => {
    e.preventDefault()
    console.log("Password change submitted")
    console.log("Form Data:", passwordForm)

    // Reset form and go back
    setPasswordForm({
      oldPassword: "",
      newPassword: "",
      code: "",
    })
    onBack()
  }

  return (
    <div className="bg-[#FBFBFB] min-h-screen  py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className=" rounded-2xl w-full max-w-lg p-6 sm:p-8">
        {/* Page Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-8">Change Password</h2>

        <form onSubmit={handlePasswordChangeSubmit} className="space-y-6">
          {/* Old Password */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm text-gray-600">Old Password</label>
              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
              >
                {showOldPassword ? <FaEyeSlash className="text-xs" /> : <FaEye className="text-xs" />}
                <span>Hide</span>
              </button>
            </div>
            <input
              type={showOldPassword ? "text" : "password"}
              name="oldPassword"
              value={passwordForm.oldPassword}
              onChange={handlePasswordInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* New Password */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm text-gray-600">New Password</label>
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
              >
                {showNewPassword ? <FaEyeSlash className="text-xs" /> : <FaEye className="text-xs" />}
                <span>Hide</span>
              </button>
            </div>
            <input
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              value={passwordForm.newPassword}
              onChange={handlePasswordInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Code */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">Code</label>
            <div className="relative">
              <input
                type="text"
                name="code"
                value={passwordForm.code}
                onChange={handlePasswordInputChange}
                className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="button"
                onClick={handleSendCode}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800 font-medium"
              >
                Send
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-400 hover:bg-gray-500 text-white font-medium py-4 rounded-full transition-colors text-lg mt-8"
          >
            Change
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword
