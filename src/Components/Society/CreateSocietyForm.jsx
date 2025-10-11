import { useEffect, useRef, useState } from "react";


const CreateSocietyForm = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);  // Reference to the modal container
  const modalContentRef = useRef(null);  // Reference to modal content to prevent closing when clicked inside
  const [formData, setFormData] = useState({
    societyName: '',
    privacy: 'public',
    inviteFriends: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  // For Modal...................................

  // Close the modal if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) && // Clicked outside modal container
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target) // Clicked outside modal content
      ) {
        onClose(); // Close modal if clicked outside
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside); // Add event listener when modal is open
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up when modal is closed
    };
  }, [isOpen, onClose]);

  // Don't render the modal if it's not open
  if (!isOpen) return null;



 return (
  <div
    
    className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50"  // Use flexbox to center the modal
  >
    <div
      ref={modalRef}
      className="w-full max-w-md max-h-[600px] p-6 bg-white rounded-lg shadow-md border border-gray-200"
    >
      <h2 className="text-2xl font-bold mb-4">Create Society</h2>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-purple-500 rounded-full mr-2"></div>
        <div>
          <p className="text-gray-700 font-medium">Emon Hasan</p>
          <p className="text-gray-500 text-sm">Admin</p>
        </div>
      </div>

      <form ref={modalContentRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="societyName">
            Society Name
          </label>
          <input
            type="text"
            id="societyName"
            name="societyName"
            value={formData.societyName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Society Name"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="privacy">
            Choose privacy
          </label>
          <select
            id="privacy"
            name="privacy"
            value={formData.privacy}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inviteFriends">
            Invite Friends
          </label>
          <input
            type="text"
            id="inviteFriends"
            name="inviteFriends"
            value={formData.inviteFriends}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Invite Friends (optional)"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
        >
          Create
        </button>
      </form>

      <button
       onClick={onClose}
        className="mt-4 bg-gray-300 py-2 px-4 rounded cursor-pointer">
        Close
      </button>
    </div>
  </div>
);

};

export default CreateSocietyForm;