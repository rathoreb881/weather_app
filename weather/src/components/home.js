
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoSearch } from "react-icons/io5";
import cloud from '../Assets/cloud.png'
import Login from './login';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

function Home() {

  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({})
  const [currentCity, setCurrentCity] = useState(['Jaipur'])
  const [condition, setCondition] = useState([])
  const [weatherData, setWeatherData] = useState({ ...weather })
  const [auth, setAuth] = useState(false)
  const [userName,setUserName]=useState('')
  const navigate = useNavigate()


  const UserSearch = async (e) => {

    try {
      const token = localStorage.getItem('token')

      const response = await axios.get("http://localhost:3001/auth/name", {
        
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log("Response:",response.data)
      
      if (!response.data.Name) {
        navigate('/login')
      }else{
        setUserName(response.data.Name)
      }
    } catch (error) {
      console.error( error.message)
    }
    
  }
  


  useEffect(() => {
    
    UserSearch()
  }, [])

  const search = async () => {
    
    try {

      const url = `https://api.weatherstack.com/current?`
      const api_key = "116175b426c5c2dc195f4332101fd906"
      await axios.get(url, {
        params: {
          access_key: api_key,
          query: input
        }
      })
        .then((res) => {

          const City = res.data.location.name
          const condition = res.data.current
          setCurrentCity(City)
          setCondition(condition)
          setWeatherData(async (prevWeather) => ({ ...prevWeather, [weather]: res.data }))
          console.log(res)
        })
    } catch (error) {
      console.log('erorr', error)
    }
  }

 
  try {
    const user=userName
    const fields = { user:user,city: currentCity, temperature: condition.temperature, humidity: condition.humidity, wind_speed: condition.wind_speed }
    
    const result = fetch("http://localhost:3001/search/weather", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields)
    })

    console.log(result)
  } catch (error) {
    console.log(error)
  }




  return (
    <div className='flex flex-col bg-sky-200 w-[400px] sm:[500px] md:w-[750px] h-[500px] rounded-md m-auto mt-[50px]'>

      <div className='flex flex-col justify-center m-auto mt-10'>
        <div className='flex items-center'>
          <input className='w-[300px] h-[50px] rounded-l-md outline-none border-2' type='text' placeholder='enter city name' name='search' value={input} onChange={(event) => setInput(event.target.value)} />
          <button className='cursor-pointer bg-sky-400 rounded-r-md text-[18px] w-[100px] h-[50px] font-serif' onClick={()=>search()}>Search</button>
        </div>
        <div className='flex flex-col '>
          <p className='flex items-center gap-2 font-semibold font-sans text-[18px] m-auto mt-5'><span className='font-serif font-normal text-[18px] '>City: </span> {currentCity ? `${currentCity}` : 'Jaipur'}</p>
          <p className='flex items-center gap-2 font-semibold font-sans text-[18px] m-auto mt-5'><span className='font-serif font-normal text-[18px] '>Date: </span></p>
          <p className='flex items-center gap-2 font-semibold font-sans text-[18px] m-auto mt-5'><span className='font-serif font-normal text-[18px] '>Temperature: </span>{condition.temperature? `${condition.temperature}` : 24} °C</p>
          <p className='flex items-center gap-2 font-semibold font-sans text-[18px] m-auto mt-5'><span className='font-serif font-normal text-[18px] '>Humidity: </span>{condition.humidity? `${condition.humidity}` : 14}</p>
          <p className='flex items-center gap-2 font-semibold font-sans text-[18px] m-auto mt-5'><img className='w-[45px] -ml-[50px] rounded-full' src={ currentCity  ? `${condition.weather_icons}` : cloud} /><span className='font-serif font-normal text-[18px] '>Weather:</span>{condition.weather_descriptions}</p>
          <p className='flex items-center gap-2 font-semibold font-sans text-[18px] m-auto mt-5'><span className='font-serif font-normal text-[18px] '></span></p>
          <p className='flex items-center gap-2 font-semibold font-sans text-[18px] m-auto mt-5'><span className='font-serif font-normal text-[18px] '>Wind_Speed:</span>{condition.wind_speed? `${condition.wind_speed}` : 55}</p>
        
        </div>
      </div>

    </div>



  )

}
export default Home;

