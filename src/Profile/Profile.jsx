import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import ProfileHeader from './ProfileHeader'
import AboutMe from './AboutMe'
import FriendsGrid from './FriendsGrid'
import Description from './Description'
import PostCard from '../Components/Feed/PostCard'

const mockPosts = [
    {
        id: 1,
        user: {
            username: "Jubayer Ahmad",
            avatar: "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
            timestamp: "2h ago",
        },
        content: "Peace On Earth A Wonderful Wish But No Way",
        image: null,
        likes: 12,
        comments: 7,
        isLiked: false,
    },
    {
        id: 2,
        user: {
            username: "Reza",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOkxkw4_Jroi5sHXGeyoLXKvEQdHcwNd6kuIGA-fkwbdUfh76NOlI9V_9Bi5Y0RrnMkQ&usqp=CAU",
            timestamp: "4h ago",
        },
        content: "Peace On Earth A Wonderful Wish But No Way",
        image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg",
        likes: 24,
        comments: 15,
        isLiked: true,
    },
    {
        id: 3,
        user: {
            username: "Reza",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOkxkw4_Jroi5sHXGeyoLXKvEQdHcwNd6kuIGA-fkwbdUfh76NOlI9V_9Bi5Y0RrnMkQ&usqp=CAU",
            timestamp: "4h ago",
        },
        content: "Peace On Earth A Wonderful Wish But No Way",
        image: "https://i.pinimg.com/564x/39/33/f6/3933f64de1724bb67264818810e3f2cb.jpg",
        likes: 24,
        comments: 15,
        isLiked: true,
    },
    {
        id: 4,
        user: {
            username: "Reza",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOkxkw4_Jroi5sHXGeyoLXKvEQdHcwNd6kuIGA-fkwbdUfh76NOlI9V_9Bi5Y0RrnMkQ&usqp=CAU",
            timestamp: "4h ago",
        },
        content: "Peace On Earth A Wonderful Wish But No Way",
        image: "https://i.pinimg.com/236x/61/c7/7a/61c77ac5085d548b40e7ac2020143453.jpg",
        likes: 24,
        comments: 15,
        isLiked: true,
    },
]


const Profile = () => {
    const [posts, setPosts] = useState(mockPosts)
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
        <div className=' bg-[#F0F0F0] pb-20'>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className='max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-5  '>
                <section className='pb-5 rounded-lg transform transition-transform duration-700 ease-out hover:scale-101'>
                    <ProfileHeader data={mockProfile}></ProfileHeader>
                </section>



                {/* Main Section............... */}
                <section className=' md:grid grid-cols-12 gap-5'>
                    <section className='col-span-4'>

                        <div className='bg-white rounded-lg mb-5 p-8 shadow-xl transform transition-transform duration-700 ease-out hover:scale-101'>
                            <AboutMe></AboutMe>
                        </div>


                        <div className='bg-white rounded-lg mb-5 p-8 shadow-xl transform transition-transform duration-700 ease-out hover:scale-101'>
                            <FriendsGrid></FriendsGrid>
                        </div>

                    </section>
                    <section className='col-span-8'>


                        <div className='bg-white rounded-lg mb-5 p-8 shadow-xl transform transition-transform duration-700 ease-out hover:scale-102'>
                            <Description></Description>
                        </div>

                        {/* Own Posts Section start here...................... */}
                        <div className="space-y-4">
                            {posts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>




                    </section>
                </section>
            </div>

        </div>
    )
}

export default Profile