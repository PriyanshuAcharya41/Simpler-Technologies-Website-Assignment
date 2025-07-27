import React from 'react'
import { RestCard } from './RestCard';
import { useState } from 'react';
import { list2 } from '../utils/userData';
import '../styles/UserCard.css'; // Assuming you have a CSS file for styles

const UserCard = () => {
    const [list, setList] = useState(list2);
    console.log(list);
  return (
    <>
    <div className='userCardWrapper'>
        <div className='userCardName'>
            <h1>Welcome</h1>
            <h1>Home</h1>
        </div>
        <h2>Here is the list of our registered user</h2>
        <div className='userDataBox'>
            <div className="userCardBox">
            {list.map((res) => (
        <RestCard key={res.id} resdata={res} />
        ))}
            
        </div>
        </div>
        
    </div>
    </>
  )
}

export default UserCard