import logo from '../../assets/communications.png'

const ChatHeader = ({ onClose }) => (
  <div className="bg-white border-b  border-[#E2E8F0] px-4 py-3 flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full flex items-center justify-center">
        <img src={logo} alt="" className='h-full w-full' />
      </div>
      <span className="font-bold text-gray-800 text-xl">Global Chat</span>
    </div>
    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
      <svg className="w-6 h-6 hover:scale-103 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
)

export default ChatHeader
