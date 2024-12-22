import React, { useState } from 'react'
import { resolvePath, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
     
    const navigate=useNavigate() 
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const fields={email,password}
  
    const login=async()=>{
        if(email && password){
            try {
               const result= await fetch('http://localhost:3001/user/login',{
                    method:"POST",
                    headers:{
                         Accept:'application/json',
                        'Content-Type':'application/json',  
                    },
                    body:JSON.stringify(fields)
                }).then((res)=>res.json()).then((token)=>{
                    console.log(token.token)
                    localStorage.setItem('token',token.token)
                    navigate('/')
                })
                  
            } catch (error) {
                console.log(error)
            }
        }else{
            toast.warning("all fields require")
        }    
     
    }
    


  return (
    <div>
        <div class="bg-sky-50 font-[sans-serif]">
      <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div class="max-w-md w-full">
        
          <div class="p-8 rounded-2xl bg-white shadow">
            <h2 class="text-gray-800 text-center text-2xl font-bold">Sign in</h2>
            <form class="mt-8 space-y-4">
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

              <div class="flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center">
                  
                 
                </div>
              
              </div>

              <div class="!mt-8">
                <button type="button" class="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none" onClick={()=>login()}>
                  Sign in
                </button>
              </div>
              <p class="text-gray-800 text-sm !mt-8 text-center">Don't have an account? <a href="/register" class="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login