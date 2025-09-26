import React from 'react'

const Description = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='text-[#364045] flex justify-between font-bold text-xl'>
                <h3 >Description</h3>
                <button 
                className='border-2 border-gray-200 cursor-pointer transform transition-transform duration-700 ease-in-out hover:scale-105 px-2 rounded-lg'
                >Edit</button>
            </div>

            <p className='text-[#48555C]'>
                Mailchimp is a company based on the GitLab open-source project, helping developers collaborate on code to build great things and ship on time. We are an active participant in our global community of customers and contributors, trying to serve their needs and lead by example. We have one vision: everyone can contribute to all digital content, and our mission is to change all creative work from read-only to read-write.

                We value results, transparency, sharing, freedom, efficiency, frugality, collaboration, directness, kindness, diversity, boring solutions, and quirkiness.
            </p>
        </div>
    )
}

export default Description