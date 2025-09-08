import React from 'react';

const UserDetail = ({user}) => {
    const {name,phone,email,username} = user
    return (
        <div className='border gap-3'>
            <h1>{name}</h1>            
            <p>{email}</p>
            <p>{phone}</p>
            <p>{username}</p>
        </div>
    );
};

export default UserDetail;