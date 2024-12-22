import React, { useEffect, useState } from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
const Navbar = () => {
    
    /**To get Token from localstorage */

    const getToken=()=>localStorage.getItem('token')

    const[token,setToken]=useState({})
    
    useEffect(()=>{
      getToken()
     setToken(getToken())
      },[])

        const deleteToken=()=>{
          localStorage.removeItem('token');
          setToken(null)
           }
  
  return (
    <div className='flex'>
    <div className='flex bg-sky-200 shadow-sm w-full h-[60px] justify-center gap-[50px] p-2 relative'>
        <TiWeatherPartlySunny className='absolute left-0 m-auto ml-4 size-[35px] cursor-pointer'/>
        
        <a className="" href='/'> <button className='rounded-full w-[100px] h-[35px] border-none bg-sky-100 hover:bg-white  text-gray-800 font-serif text-[15px]'>Home</button></a>
        <a className='' href='/report'>  <button className='rounded-full w-[120px] h-[35px] border-none bg-sky-100 hover:bg-white text-gray-800 font-serif text-[15px]'>WeatherReport</button></a>
        <a className="" href='/login'>
        <button className='rounded-full w-[100px] h-[35px] border-none bg-sky-100 hover:bg-white  text-gray-800 font-serif text-[15px]' onClick={()=>deleteToken()} >
          {token?<>Logout</>:<>Login</>}
        </button></a>
    </div>
    </div>
  )
}
export default Navbar