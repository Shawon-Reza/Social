import React from "react"

const AuthButton = ({
  text,          // button text
  onClick,
  type = "button",
  className = "", // pass custom Tailwind classes from parent
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full px-6 py-3 bg-gray-400 hover:bg-gray-500 text-white  focus:ring-blue-400 rounded-full font-bold cursor-pointer ${className}`}
    >
      {text}
    </button>
  )
}

export default AuthButton
