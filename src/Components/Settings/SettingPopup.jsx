import React, { useEffect, useRef } from "react";
import { FaUser, FaBan, FaQuestionCircle } from 'react-icons/fa';
import { MdOutlineExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const modalContentRef = useRef(null);

    // Handle click outside to close modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                modalRef.current &&
                !modalContentRef.current.contains(event.target)
            ) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div ref={modalRef} className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
            <div ref={modalContentRef} className="bg-white rounded-lg shadow-md p-4 max-w-md w-full mx-4">
                <h2 className="text-gray-800 text-lg font-semibold mb-4">Settings</h2>

                <hr className="border border-[#E2E8F0] my-3" />
                <div className="space-y-2">
                    <Link
                        to="/settings/profile_settings"
                        className="flex items-center justify-between bg-blue-100 rounded-lg p-3 hover:bg-blue-200 transition duration-200"
                    >
                        <div className="flex items-center">
                            <FaUser className="text-blue-600 mr-2" />
                            <span className="text-gray-700">Account Center</span>
                        </div>
                        <MdOutlineExpandLess className="rotate-90" size={23} />
                    </Link>
                    <a href="" className="flex items-center justify-between bg-blue-100 rounded-lg p-3 hover:bg-blue-200 transition duration-200">
                        <div className="flex items-center">
                            <FaBan className="text-blue-600 mr-2" />
                            <span className="text-gray-700">Blocking</span>
                        </div>
                        <MdOutlineExpandLess className="rotate-90" size={23} />
                    </a>
                </div>
                <h2 className="text-gray-800 text-lg font-semibold mt-4 mb-4">Support</h2>

                <div className="space-y-2">
                    <Link
                        to="/settings/help_center"
                        className="flex items-center justify-between bg-blue-100 rounded-lg p-3 hover:bg-blue-200 transition duration-200"
                    >
                        <div className="flex items-center">
                            <FaQuestionCircle className="text-blue-600 mr-2" />
                            <span className="text-gray-700">Help Center</span>
                        </div>
                        <MdOutlineExpandLess className="rotate-90" size={23} />
                    </Link>
                </div>
                <button onClick={onClose} className="mt-4 bg-gray-300 py-2 px-4 rounded hover:bg-gray-400 transition duration-200 cursor-pointer">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;