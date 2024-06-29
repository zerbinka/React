import axios from 'axios';
import { User, Post } from '../interfaces';

const API_URL = 'https://dummyjson.com';

export const getUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data.users;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

export const getUserPosts = async (userId: number): Promise<Post[]> => {
    try {
        const response = await axios.get(`${API_URL}/posts/user/${userId}`);
        return response.data.posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};