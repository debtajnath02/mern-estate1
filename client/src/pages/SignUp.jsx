import React from 'react'
import { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import OAuth from '../component/OAuth'
const SignUp = () => {    
  let [formData, setFormData] = useState({})
  let [error, setError] = useState()
  let [loading, setLoading] = useState(false)
let navigate = useNavigate()
  let handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
  }
      console.log(formData);
let handleSubmit = async (e)=>{
  try {
    setLoading(true)
    e.preventDefault()
    let res = await fetch("http://localhost:3000/api/signup", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    let data = await res.json()
    console.log(data);
    
      if( data !== String&&data.success === false){
        setError(data.message)
        setLoading(false)
        return;
    }

    setLoading(false)
    setError(null)
    navigate("/sign-in")
  } catch (error) {
    setLoading(false)

    setError(error.message)
  }

}
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-bold text-center my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" className='border p-3 rounded-lg focus:outline-none' placeholder='username' id='username' onChange={handleChange}/>
        <input type="email" className='border p-3 rounded-lg focus:outline-none'  placeholder='email'id='email' onChange={handleChange}/>
        <input type="password" className='border p-3 rounded-lg focus:outline-none' placeholder='password'id='password' onChange={handleChange}/>
        <button disabled = {loading} className='bg-slate-700 p-3 rounded-2xl text-white disabled:opacity-80'>{loading?"loading":"sign Up"}</button>
        <OAuth/>
      </form>
      <div className = "flex gap-2 mt-5"> <p>
        have an account?
        </p>
        <Link to={"sign-in"}>
          <span className='text-blue-700'>Sign in</span>
 
        </Link> </div>
        {error&&<p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default SignUp
