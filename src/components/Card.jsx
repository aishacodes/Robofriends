import React from 'react'

export default function Card({friends}) {
  return (
    <div>
       <div className="flex justify-center flex-wrap">
    {
        friends.map((friend, friendId) => 
        <div className="flex justify-items-center items-center m-2 flex-col border-gray-300 bg-gray-500 p-8 rounded">
          <img src={`images/${friend.img}`} className="w-32 rounded-full" alt="pp"/>
          <p>Name: {friend.name}</p>
          <p>Userame: {friend.username}</p>
          <p>email: {friend.email}</p>

        </div>)
    }</div>
      
    </div>
  )
}
