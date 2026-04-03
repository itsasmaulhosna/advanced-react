import React, {  } from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>Users</h2>
            <p>This is the Users page.</p>
            <div>
                {
                    users.map(user=><User user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;