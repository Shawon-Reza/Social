import React, { useState } from 'react'
import Navbar from '../Navbar'
import GlobalCreoleSocietyCard from './GlobalCreoleSocietyCard'
import GroupSection from './GroupSection'
import GroupInfo from './GroupInfo'
import PostCard from '../Feed/PostCard'
import ShareModal from '../Feed/ShareModal'
import CommentsModal from '../Feed/CommentsModal'
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

const MySociety = () => {
    const [posts, setPosts] = useState(mockPosts)

    const [isModalOpen, setIsModalOpen] = useState(false)



    // Modals: comment & share ...................................................
    const [activeSharePostId, setActiveSharePostId] = useState(null)
    const [activeCommentPostId, setActiveCommentPostId] = useState(null)

    const handleOpenShareModal = (postId) => setActiveSharePostId(postId)
    const handleOpenCommentModal = (postId) => setActiveCommentPostId(postId)

    const closeShareModal = () => setActiveSharePostId(null)
    const closeCommentModal = () => setActiveCommentPostId(null)
// ..................................................................................



    
    return (
        <div className=' bg-[#F3F4F6] '>
            <section>
                <Navbar></Navbar>
            </section>
            {/* Mai part */}

            <section className='sm:grid grid-cols-12 gap-5 lg:gap-10 mt-6 container mx-auto'>
                <section className='col-span-4'>
                    <div>
                        <GlobalCreoleSocietyCard></GlobalCreoleSocietyCard>
                    </div>
                </section>


                <section className='col-span-8'>
                    <GroupSection></GroupSection>

                    <div className='mt-5'>
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
                </section>
            </section>

            {/* Share & Comment Modals */}
            <ShareModal
                isOpen={!!activeSharePostId}
                onClose={closeShareModal}
                postId={activeSharePostId}
            />
            <CommentsModal
                isOpen={!!activeCommentPostId}
                onClose={closeCommentModal}
                postId={activeCommentPostId}
            />

        </div>
    )
}

export default MySociety