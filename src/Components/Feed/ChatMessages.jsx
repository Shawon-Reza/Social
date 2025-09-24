const ChatMessages = ({ messages, messagesEndRef }) => (
  <div className="flex-1 overflow-y-auto p-4 space-y-4">
    {messages.map((msg) => (
      <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
        <div className={`flex items-start space-x-2 max-w-xs ${msg.isOwn ? "flex-row-reverse space-x-reverse" : ""}`}>
          {!msg.isOwn && <div className="w-8 h-8 bg-red-500 rounded-full flex-shrink-0"></div>}
          <div className={`rounded-2xl px-4 py-2 ${msg.isOwn ? "bg-blue-500 text-white rounded-br-md" : "bg-gray-100 text-gray-800 rounded-bl-md"}`}>
            <p className="text-sm">{msg.message}</p>
            <div className="flex items-center justify-between mt-1">
              {!msg.isOwn && <span className="text-xs font-medium">{msg.user}</span>}
              <span className={`text-xs ${msg.isOwn ? "text-blue-100" : "text-gray-500"} flex items-center`}>
                {msg.time}
                {msg.isOwn && (
                  <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
    <div ref={messagesEndRef} />
  </div>
)

export default ChatMessages
