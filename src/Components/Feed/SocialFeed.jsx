import React, { useState, useEffect, useRef } from "react"
import StoriesSection from "./StoriesSection"
import CreatePostSection from "./CreatePostSection"
import PostCard from "./PostCard"
import ShareModal from "./ShareModal" // Import ShareModal
import CommentsModal from "./CommentsModal" // Import CommentsModal

const mockStories = [
    { id: "add", type: "add", title: "Add your reels" },
    { id: 1, username: "Morgan", avatar: "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg", hasStory: true },
    { id: 2, username: "Stanley", avatar: "/man-professional.jpg", hasStory: true },
    { id: 3, username: "Allen", avatar: "/young-man.jpg", hasStory: true },
    { id: 4, username: "Lucas", avatar: "/man-casual.jpg", hasStory: true },
    { id: 5, username: "Danny", avatar: "/woman-outdoor.jpg", hasStory: true },
]

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
]

const SocialFeed = () => {
    const [posts, setPosts] = useState(mockPosts)
    const [stories, setStories] = useState(mockStories)
    const [currentUser] = useState({
        username: "Ryan",
        avatar: "https://media.istockphoto.com/id/492529287/photo/portrait-of-happy-laughing-man.jpg?s=612x612&w=0&k=20&c=0xQcd69Bf-mWoJYgjxBSPg7FHS57nOfYpZaZlYDVKRE=",
    })
    const [isShareModalOpen, setIsShareModalOpen] = useState(false) // State for the modal
    const [selectedPostId, setSelectedPostId] = useState(null) // Store the selected post ID for sharing

    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)

    const shareModalRef = useRef(null) // Reference for ShareModal container
    const commentsModalRef = useRef(null) // Reference for CommentsModal container

    const handleCreatePost = (postData) => {
        console.log("[v0] Creating post:", postData)
        const newPost = {
            id: Date.now(),
            user: {
                username: currentUser.username,
                avatar: currentUser.avatar,
                timestamp: "now",
            },
            content: postData.content,
            image: null,
            likes: 0,
            comments: 0,
            isLiked: false,
        }
        setPosts((prev) => [newPost, ...prev])
    }

    const handleLike = (postId, isLiked) => {
        console.log("[v0] Post liked:", { postId, isLiked })
    }

    // For Share Modal................................
    const handleShare = (postId) => {
        setSelectedPostId(postId) // Set the post to be shared
        setIsShareModalOpen(true) // Open the share modal
    }

    const closeShareModal = () => {
        setIsShareModalOpen(false) // Close the modal
        setSelectedPostId(null) // Reset selected post
    }

    // For Comment Modal................................
    const handleComment = (postId) => {
        setSelectedPostId(postId) // Set the post to be shared
        setIsCommentModalOpen(true) // Open the comment modal
    }

    const closeCommentsModal = () => {
        setIsCommentModalOpen(false) // Close the modal
        setSelectedPostId(null) // Reset selected post
    }

    // Close modals if the user clicks outside of the modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check for both modals, if clicked outside of them, close the respective modal
            if (shareModalRef.current && !shareModalRef.current.contains(event.target)) {
                closeShareModal(); // Close ShareModal if clicked outside
            }
            if (commentsModalRef.current && !commentsModalRef.current.contains(event.target)) {
                closeCommentsModal(); // Close CommentsModal if clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside)

        // Clean up event listener when the component is unmounted
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
                console.log("[v0] Load more posts triggered")
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto p-4 min-h-screen">
            <StoriesSection stories={stories} />
            <CreatePostSection currentUser={currentUser} onCreatePost={handleCreatePost} />

            <div className="space-y-4">
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        post={post}
                        onLike={handleLike}
                        onComment={handleComment}
                        onShare={handleShare} // Pass the handleShare function to open the modal
                    />
                ))}
            </div>

            {/* Showing Loading */}
            <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>

            {/* Share Modal */}
            <ShareModal
                isOpen={isShareModalOpen}
                onClose={closeShareModal}
                postId={selectedPostId} // Pass selected post to modal
                ref={shareModalRef} // Reference for ShareModal container
            />

            {/* Comments Modal */}
            <CommentsModal
                isOpen={isCommentModalOpen}
                onClose={closeCommentsModal}
                postId={selectedPostId} // Pass selected post to modal
                ref={commentsModalRef} // Reference for CommentsModal container
            />
        </div>
    )
}

export default SocialFeed
