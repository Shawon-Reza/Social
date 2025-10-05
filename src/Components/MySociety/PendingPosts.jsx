import React, { useState } from 'react'
import PostCard from '../Feed/PostCard'
import Navbar from '../Navbar'
import { RiMenuAddLine } from 'react-icons/ri'
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
const PendingPosts = () => {
    const [posts, setPosts] = useState(mockPosts)
    return (
        <div className='bg-[#E2E8F0]/60'>

            <Navbar></Navbar>

            <div className='container mx-auto mt-5'>
                <div className='bg-white px-4 py-3 rounded-xl flex items-center justify-between gap-5'>
                    <input type="search"
                        placeholder='Search post'
                        className='bg-black/10 font-semibold px-4 py-3 rounded-xl text-[#92929D] w-full' />
                    <RiMenuAddLine size={40} className='bg-[#3B82F6] cursor-pointer p-2 rounded-lg'  color='white'/>


                </div>
                <h3 className='text-2xl font-bold my-5'>Pending Posts</h3>
                <div className='mt-5 '>
                    {/* <PostCard></PostCard> */}
                    {/* Posts Section */}
                    <div className="space-y-4">
                        {posts.map((post) => (
                            <PostCard
                                key={post.id}
                                post={post}
                                onComment={() => handleOpenCommentModal(post.id)}
                                onShare={() => handleOpenShareModal(post.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendingPosts