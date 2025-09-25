const ChatInput = ({ message, setMessage, onFocus, onSend }) => (
  <div className="border-t border-[#E2E8F0] p-4">
    <form onSubmit={onSend} className="relative">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onFocus={onFocus}
        placeholder="Chat with everyone live"
        className="w-full px-4 py-3 rounded-full bg-gray-100 text-gray-800 placeholder-gray-500 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors disabled:opacity-50"
        disabled={!message.trim()}
      >
        <svg className="w-4 h-4 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </button>
    </form>
  </div>
)

export default ChatInput
