import React from 'react'
import {Link} from "react-router-dom"
const SignUp = () => {
// const [password, setPassword] = useState()
// const [username, setUsername] = useState()
// const [email, setEmail] = useState()
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-bold text-center my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" className='border p-3 rounded-lg focus:outline-none' placeholder='username'/>
        <input type="email" className='border p-3 rounded-lg focus:outline-none'  placeholder='email'/>
        <input type="password" className='border p-3 rounded-lg focus:outline-none' placeholder='password'/>
        <button className='bg-slate-700 p-3 rounded-2xl text-white'>Sign Up</button>
      </form>
      <div className = "flex gap-2 mt-5"> <p>
        have an account?
        </p>
        <Link to={"sign-in"}>
          <span className='text-blue-700'>Sign in</span>
 
        </Link> </div>
    </div>
  )
}

export default SignUp