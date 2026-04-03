import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {
    const{id,name,email,phone}=user;
    const[showDetails, setShowDetails]=useState(false)
    const[visitHome,setVisistHome]=useState(false);
    const userPromise=fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json());
    const userStyle={
        border:'1px solid gray',
        margin:'8px',
        padding:'8px',
        borderRadius:'8px'
    }
    if(visitHome){
        return <Navigate to='/'></Navigate>
    }
    return (
        <div style={userStyle}>
           <h3>{name}</h3>
           <p>Email: {email}</p> 
           <p>Phone: {phone}</p>
           <Link to={`/users/${id}`}>Show Details</Link>
           <button onClick={()=>setShowDetails(!showDetails)}>
               {showDetails?'Hide' : 'Show'} Details
           </button>
           {
            showDetails && <Suspense fallback={<span>Looding...</span>}>
                <UserDetails2 userPromise={userPromise}></UserDetails2>
            </Suspense>
           }
           <button onClick={()=>setVisistHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;