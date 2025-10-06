function Message({ message }) {
  return (
    <div className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-xs md:max-w-md lg:max-w-lg ${message.isOwn ? "order-2" : "order-1"}`}>
        {!message.isOwn && <p className="text-xs text-gray-600 mb-1 ml-1">{message.senderName}</p>}
        <div
          className={`rounded-2xl px-4 py-2.5 ${
            message.isOwn ? "bg-blue-500 text-white rounded-br-none" : "bg-gray-100 text-gray-900 rounded-bl-none"
          }`}
        >
          <p className="text-sm leading-relaxed">{message.text}</p>
        </div>
        <p className={`text-xs text-gray-500 mt-1 ${message.isOwn ? "text-right mr-1" : "ml-1"}`}>
          {message.timestamp}
        </p>
      </div>
    </div>
  )
}

export default Message
