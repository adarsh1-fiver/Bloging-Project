import React, { useState } from 'react'
import { useAppContext } from '../../../context/AppContext'
import toast from 'react-hot-toast';

const Login = () => {

  const {axios,setToken}=useAppContext();
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


  const handleSubmit =async(e)=>{
    e.preventDefault()


    try {
      const{data}=await axios.post('api/admin/login',{email,password})
      if(data.success){
        setToken(data.token)
        localStorage.setItem('token',data.token)
        axios.defaults.headers.common["Authorization"]=data.token;

      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)

    }
  }
  return (
    <div className='flex items-center justify-center h-screen'>

      <div className='w-full max-w-sm p-6 max-md:m-6 border border-pink-800
      /30 shadow-xl shadow-pink-800/15 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
<div className='w-full py-6 text-center'>
  <h1 className='text-3xl font-bold'><span className='text-pink-800'>Admin </span>Login</h1>
  <p className='font-light'>Enter your credential </p>
</div>

<form onSubmit={handleSubmit}>
  <div className='flex flex-col'>
    <label>Email</label>
    <input onChange={e=> setEmail(e.target.value)} value={email} 
    type="email" required placeholder='your email id'
    className='border-b-2 border-b-gray-300 p-2 outline-none mb-6'/>
  </div>

 <div className='flex flex-col'>
    <label>Password</label>
    <input  onChange={e=> setPassword(e.target.value)} value={password} 
    type="Password" required placeholder='your Password'
    className='border-b-2 border-b-gray-300 p-2 outline-none mb-6'/>
  </div>
<button type="submit" className='w-full py-3 font-medium bg-pink-800
text-white rounded cursor-pointer hover:bg-pink-800/90
transition-all'>Login</button>
</form>
        </div>
      </div>
    </div>
  )
}

export default Login
