"use client"

function ChatListItem({ chat, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-4 cursor-pointer transition-colors border-b border-gray-100 ${
        isSelected ? "bg-blue-50" : "hover:bg-gray-50"
      }`}
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <img src={chat.avatar || "/placeholder.svg"} alt={chat.name} className="w-12 h-12 rounded-full object-cover" />
        {chat.isActive && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        )}
      </div>

      {/* Chat Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-gray-900 text-sm truncate">{chat.name}</h3>
          <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{chat.timestamp}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
      </div>

      {/* Unread Indicator */}
      {chat.unread && <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>}
    </div>
  )
}

export default ChatListItem
