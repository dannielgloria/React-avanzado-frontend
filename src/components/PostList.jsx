import React, { useEffect, useState } from "react";
import client from "../service/client";

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await client.get("/post");
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);
    
    return (
        <div>
            <h2>Lista de Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <h4>{post.user_id.username}</h4>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}