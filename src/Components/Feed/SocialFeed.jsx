"use client"

import { useState } from "react"
import StoriesSection from "./StoriesSection"
import CreatePostSection from "./CreatePostSection"
import PostCard from "./PostCard" // Import PostCard

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

    // For creating a post (just updates the posts list)
    const handleCreatePost = (postData) => {
        const newPost = {
            id: Date.now(),
            user: {
                username: "Ryan",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s", // Placeholder for user avatar
                timestamp: "just now",
            },
            content: postData.content,
            image: null,
            likes: 0,
            comments: 0,
            isLiked: false,
        }
        setPosts((prev) => [newPost, ...prev]) // Add new post to the beginning of the list
    }

    return (
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto p-4 min-h-screen">
            <StoriesSection stories={mockStories} />
            <CreatePostSection currentUser={{ username: "Ryan", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s" }} onCreatePost={handleCreatePost} />

            <div className="space-y-4">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default SocialFeed
