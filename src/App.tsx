import React, { useEffect, useState } from 'react';
import Users from './components/Users';
import './App.css';
import { getUsers } from './services/userService';
import { User } from './interfaces';

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsers();
                console.log('Fetched users:', data);
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="App">
            <h1>User Information</h1>
            <Users users={users} />
        </div>
    );
};

export default App;