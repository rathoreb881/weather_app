import React from 'react'
import Home from './components/home.js'
import Navbar from './components/navbar'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'
import Weather from './components/weather'
import WeatherReport from './components/report.js'
import StoreContextProvider from './Context/store.context.jsx'

const App = () => {
  return (
    <div>
      <StoreContextProvider>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Weather/>}/>
        <Route path='/weather' element={<Home/>}/>
        <Route path='/report' element={<WeatherReport/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      </StoreContextProvider>
    </div>
  )
}

export default App