import React from 'react'
import pic from '../Assets/pic.png'

const Weather = () => {
  return (
    <div className='flex justify-between items-center '>
        <img className='relative bg-cover h-[90vh] w-full' src={pic} alt=''/>
        <a href='/weather' className=''><button className='bg-sky-400 rounded-full w-[150px] sm:w-[250px]  h-[50px] border-2 absolute right-0 '>Check Weather--</button></a> 
    </div>
  )
}

export default Weather
