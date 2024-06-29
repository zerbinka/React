import React from 'react';
import { User } from '../interfaces';
import UserComponent from './User';

interface UsersProps {
    users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
    return (
        <div className="users-container">
            <h2>Users:</h2>
            {users.map(user => (
                <UserComponent key={user.id} user={user} />
            ))}
        </div>
    );
};

export default Users;