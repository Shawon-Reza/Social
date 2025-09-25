import { FaCamera, FaImage } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { MdModeEdit } from 'react-icons/md';

const UploadProfilePage = () => {
    const [imagePreview, setImagePreview] = useState("https://cdn.pixabay.com/photo/2025/05/23/08/54/girl-9617241_1280.png"); // Default image
    const [imageFile, setImageFile] = useState(null); // Store the image file
    const fileInputRef = useRef(null);

    // Handle image selection from file input
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        // Basic validation for file type and size
        if (file) {
            if (!file.type.startsWith('image/')) {
                alert('Please upload a valid image.');
                return;
            }
            if (file.size > 15 * 1024 * 1024) { // 15MB limit
                alert('File size should not exceed 15MB.');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Set the image preview after reading the file
            };
            reader.readAsDataURL(file);
            setImageFile(file); // Store the file
        }
    };

    // Handle file input from gallery or camera
    const handleFromGallery = () => {
        if (fileInputRef.current) fileInputRef.current.click();
    };

    return (
        <div className="">
            {/* Main Section */}
            <div className="flex-1 flex flex-col items-center justify-center text-center max-w-xl mx-auto">

                {/* Profile Image Circle */}
                <div className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-2xl border-4 border-white bg-gray-200 der-dashed shadow-2xl overflow-hidden flex items-center justify-center mb-2 cursor-pointer"
                >
                    <img
                        src={imagePreview}
                        alt="Profile"
                        className="object-cover w-full h-full"
                    />
                    <MdModeEdit
                        onClick={handleFromGallery}
                        className="absolute hover:scale-103 lg:hover:scale-107 right-1 bottom-2 shadow-2xl text-white text-base "
                        color="white"
                        size={20}
                    />
                </div>



                {/* Hidden File Input */}
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleImageChange}
                />


            </div>

        </div>
    );
};

export default UploadProfilePage;
