import React, { useState } from 'react';
import { User, Post } from '../interfaces';
import { getUserPosts } from '../services/userService';

interface UserProps {
    user: User;
}

const UserComponent: React.FC<UserProps> = ({ user }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [showPosts, setShowPosts] = useState<boolean>(false);

    const fetchPosts = async () => {
        const data = await getUserPosts(user.id);
        setPosts(data);
        setShowPosts(true);
    };

    return (
        <div className="user-card">
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.firstName}</p>
            <p><strong>Surname:</strong> {user.lastName}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={fetchPosts}>Show Posts</button>
            {showPosts && (
                <div className="posts-container">
                    {posts.length > 0 ? (
                        posts.map(post => (
                            <div key={post.id} className="post-card">
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        ))
                    ) : (
                        <p>No posts found for this user.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserComponent;