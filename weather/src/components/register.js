import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const navigate=useNavigate()
    const [name,setName]=useState('')
    const [userName,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    

   const fields={name,userName,email,password}

   const signup=async()=>{
    if(name,userName,email,password){
        try {
           const result= await fetch('http://localhost:3001/user/register',{
                method:"POST",
                headers:{
                     Accept:'application/json',
                    'Content-Type':'application/json',  
                },
                body:JSON.stringify(fields)
            })
           console.log(result)
           if(result.ok===true){
            setName("")
            setEmail("")
            setPassword("")
            setUserName("")
            
             navigate('/login')
           }
               
        } catch (error) {
            console.log(error)
        }
    }else{
        toast.warning("All fields require")
    }

   }

  return (
    <div>
        <div class="bg-sky-50 font-[sans-serif]">
      <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div class="max-w-md w-full">
        
          <div class="p-8 rounded-2xl bg-white shadow">
            <h2 class="text-gray-800 text-center text-2xl font-bold">Sign up</h2>
            <form class="mt-8 space-y-4">
            <div>
                <label class="text-gray-800 text-sm mb-2 block">Name</label>
                <div class="relative flex items-center">
                  <input name="name" type="text" value={name} onChange={(e)=>setName(e.target.value)}  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user name" />
                  
                </div>
              </div>
              <div>
                <label class="text-gray-800 text-sm mb-2 block">User Name</label>
                <div class="relative flex items-center">
                  <input name="username" type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user name" />
                  
                </div>
              </div>
              <div>
                <label class="text-gray-800 text-sm mb-2 block">Email</label>
                <div class="relative flex items-center">
                  <input name="email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user name" />
                  
                </div>
              </div>
              <div>
                <label class="text-gray-800 text-sm mb-2 block">Password</label>
                <div class="relative flex items-center">
                  <input name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter password" />
                  
                </div>
              </div>
              <div class="!mt-8">
                <button type="button" class="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none" onClick={()=>signup()}>
                  Sign up
                </button>
               
              </div>
              </form>
             
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register