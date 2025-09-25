import React from 'react'
import Navbar from '../Components/Navbar'
import ProfileHeader from './ProfileHeader'




const Profile = () => {

    const mockProfile = {
        "id": "user_12345",
        "name": "Mailchimp",
        "username": "Shawon Reza",
        "profileImage": "https://randomuser.me/api/portraits/women/44.jpg",
        "coverImage": "https://picsum.photos/800/200",
        "industry": "Information Technology and Services",
        "location": "San Francisco, California",
        "followers": 42835,
        "stats": {
            "posts": 10300,
            "friends": 256,
            "likes": 12200
        },
        "about": {
            "location": "Yogyakarta, ID",
            "joined": "June 2012",
            "workplace": "Sebo Studio"
        },
        "description": "Mailchimp is a company based on the GitLab open-source project, helping developers collaborate on code to build great things and ship on time. We are an active participant in our global community of customers and contributors, trying to serve their needs and lead by example. We have one vision: everyone can contribute to all digital content, and our mission is to change all creative work from read-only to read+write.",
        "values": [
            "transparency",
            "sharing",
            "freedom",
            "efficiency",
            "frugality",
            "collaboration",
            "directness",
            "kindness",
            "diversity",
            "bringing solutions",
            "quirkiness"
        ]
    }


    return (
        <div className=' bg-[#F0F0F0]'>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className='max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-5 '>
                <section className='pb-10 rounded-lg'>
                    <ProfileHeader data={mockProfile}></ProfileHeader>
                </section>
            </div>

        </div>
    )
}

export default Profile