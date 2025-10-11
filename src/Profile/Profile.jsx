import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Components/Navbar'
import ProfileHeader from './ProfileHeader'
import AboutMe from './AboutMe'
import FriendsGrid from './FriendsGrid'
import Description from './Description'
import PostCard from '../Components/Feed/PostCard'
import EditAboutModal from './EditAboutModal'
import ShareModal from '../Components/Feed/ShareModal'
import CommentsModal from '../Components/Feed/CommentsModal'

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

    const [isModalOpen, setIsModalOpen] = useState(false)
    const editAboutmodal = useRef(null)

    // Modals: comment & share
    const [activeSharePostId, setActiveSharePostId] = useState(null)
    const [activeCommentPostId, setActiveCommentPostId] = useState(null)

    const handleOpenShareModal = (postId) => setActiveSharePostId(postId)
    const handleOpenCommentModal = (postId) => setActiveCommentPostId(postId)

    const closeShareModal = () => setActiveSharePostId(null)
    const closeCommentModal = () => setActiveCommentPostId(null)


    
    const handleEditAboutPopup = () => {
        setIsModalOpen(prev => !prev)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (editAboutmodal.current && !editAboutmodal.current.contains(event.target)) {
                setIsModalOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const mockProfile = {
        id: "user_12345",
        name: "Mailchimp",
        username: "Shawon Reza",
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        coverImage: "https://picsum.photos/800/200",
        industry: "Information Technology and Services",
        location: "San Francisco, California",
        followers: 42835,
        stats: {
            posts: 10300,
            friends: 256,
            likes: 12200,
        },
        about: {
            location: "Yogyakarta, ID",
            joined: "June 2012",
            workplace: "Sebo Studio",
        },
        description:
            "Mailchimp is a company based on the GitLab open-source project, helping developers collaborate on code to build great things and ship on time. We are an active participant in our global community of customers and contributors, trying to serve their needs and lead by example. We have one vision: everyone can contribute to all digital content, and our mission is to change all creative work from read-only to read+write.",
        values: [
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
            "quirkiness",
        ],
    }

    return (
        <div className="relative bg-[#F0F0F0] pb-20 my-7">

            {/* Edit Profile Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                    <div ref={editAboutmodal} className="bg-white rounded-lg p-6 shadow-xl">
                        <EditAboutModal />
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Navbar */}
            <nav>
                <Navbar />
            </nav>

            {/* Profile Body */}
            <div className="2xl:px-44 xl:px-36 lg:px-28 md:px-20 sm:px-14 px-8 mt-5">
                <section className="pb-5 rounded-lg transform transition-transform duration-700 ease-out hover:scale-101">
                    <ProfileHeader data={mockProfile} />
                </section>

                <section className="md:grid grid-cols-12 gap-5">
                    <section className="col-span-4">
                        <div className="bg-white rounded-lg mb-5 p-8 shadow-xl transform transition-transform duration-700 ease-out hover:scale-103">
                            <AboutMe handleEditAboutPopup={handleEditAboutPopup} />
                        </div>
                        <div className="bg-white rounded-lg mb-5 p-8 shadow-xl transform transition-transform duration-700 ease-out hover:scale-103">
                            <FriendsGrid />
                        </div>
                    </section>

                    <section className="col-span-8">
                        <div className="bg-white rounded-lg mb-5 p-8 shadow-xl transform transition-transform duration-700 ease-out hover:scale-102">
                            <Description />
                        </div>

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
                    </section>
                </section>
            </div>

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

export default Profile
