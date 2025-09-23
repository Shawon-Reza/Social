import React, { useState, useEffect } from "react"
import StoriesSection from "./StoriesSection"
import CreatePostSection from "./CreatePostSection"
import PostCard from "./PostCard"


// Mock data and functions for simplicity
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
        avatar: "/abstract-user-representation.png",
    })

    

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

    const handleComment = (postId) => {
        console.log("[v0] Comment on post:", postId)
    }

    const handleShare = (postId) => {
        console.log("[v0] Share post:", postId)
    }

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
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto p-4  min-h-screen">
            <StoriesSection stories={stories}  />
            <CreatePostSection currentUser={currentUser} onCreatePost={handleCreatePost} />

            <div className="space-y-4">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} onLike={handleLike} onComment={handleComment} onShare={handleShare} />
                ))}
            </div>
            {/* Showing Loading */}
            <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
        </div>
    )
}

export default SocialFeed
