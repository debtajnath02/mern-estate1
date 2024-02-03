import React from 'react'
import {  useSelector } from 'react-redux'
const Profile = () => {
  let {currentUser} = useSelector(state => state.user)
  return (
    <div className=''>
    <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
<form className='flex flex-col gap-4'>
<img src={currentUser.avatar} alt="" className=" h-28 w-28 rounded-full  self-center"/>
<input type="text" placeholder='username' className='rounded-lg border p-3 h-19 w-72 mx-auto' id='username'/>
<input type="email" placeholder='email' className='rounded-lg border p-3 h-19 w-72 mx-auto' id='email'/>
<input type="password" placeholder='password' className='rounded-lg border p-3 h-19 w-72 mx-auto' id='password'/>
<button className=' bg-blue-800 p-3 rounded-lg h-19 w-72  mx-auto text-white hover:opacity-95 disabled:opacity-80'>update</button>
</form>
<div className=' p-3 h-19 w-72 mx-auto justify-between flex'>
  <span className=' text-red-700 cursor-pointer'>
    delete account
  </span >

  <span className=' text-red-700 cursor-pointer'>
    sign out
  </span>
</div>
    </div>
  )
}

export default Profile