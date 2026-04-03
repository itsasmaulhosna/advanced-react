import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user=useLoaderData
    
    const{email,name}=user;
    return (
        <div>
           <h3>User Details</h3>
           <h5>Name:{name}</h5> 
           <h5>Email:{email}</h5> 

        </div>
    );
};

export default UserDetails;