import React, { useState } from 'react'
import '../assets/styles/Description.css'

const Description = () => {
    const [isEdit, setIsEdit] = useState(false)
    const [description, setDescription] = useState(
        `Mailchimp is a company based on the GitLab open-source project, helping developers collaborate on code to build great things and ship on time. We are an active participant in our global community of customers and contributors, trying to serve their needs and lead by example. We have one vision: everyone can contribute to all digital content, and our mission is to change all creative work from read-only to read-write.

We value results, transparency, sharing, freedom, efficiency, frugality, collaboration, directness, kindness, diversity, boring solutions, and quirkiness.`
    )

    const handleEditToggle = () => {
        setIsEdit(!isEdit)
    }

    const handleSave = () => {
        // Here you can also send updated description to backend
        setIsEdit(false)
    }

    return (
        <div className="flex flex-col gap-5 max-h-[260px] truncate ">
            <div className="flex justify-between items-start">
                <h3 className="text-[#364045] font-bold text-xl">Description</h3>
                <button
                    onClick={handleEditToggle}
                    className="border-2 border-gray-200 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 px-3 py-1 rounded-lg text-sm font-medium"
                >
                    {isEdit ? 'Cancel' : 'Edit'}
                </button>
            </div>

            {isEdit ? (
                <div className="flex flex-col gap-3 p-1">
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-1 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent scrollbar-red"
                        rows={6}
                    />
                    <div className="flex justify-end">
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium cursor-pointer"
                        >
                            Save
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-[#48555C] whitespace-pre-line truncate overflow-auto scrollbar-red">
                    {description}
                </p>
            )}
        </div>
    )
}

export default Description
