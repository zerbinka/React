export interface User {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}