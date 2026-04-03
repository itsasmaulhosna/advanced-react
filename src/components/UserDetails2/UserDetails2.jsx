import React, { use } from 'react';

const UserDetails2 = ({ userPromise }) => {
    const {name,username}=use(userPromise);
    return (
        <div>
           <h3>Name:{name}</h3> 
           <p>Username: {username}</p>

        </div>
    );
};

export default UserDetails2;