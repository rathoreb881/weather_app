import React, { createContext, useEffect, useState } from 'react'

export const storeContext=createContext();

const StoreContextProvider=({children})=>{
   
    const getToken=()=>localStorage.getItem('token')
     
    const[token,setToken]=useState({})
    
    useEffect(()=>{
     setToken(getToken())
    },[])

    const deleteToken=()=>{
      localStorage.removeItem('token');
      setToken(null)
    }
    
    return (
        <storeContext.Provider  value={{token,deleteToken}}>
            {children}
        </storeContext.Provider>
    )
}

export default StoreContextProvider