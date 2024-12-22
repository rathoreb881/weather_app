import express from 'express'
import connectDb from '../db.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
const WeatherRouter = express.Router();


WeatherRouter.get('/report', async (req, res) => {
   
        try {
        
         const Database = await connectDb()
         if(Database){
           console.log("db connected")
         }
          const [rows] = await Database.query('SELECT * FROM  user_search ')
          
          if (rows.length===0) {
            return res.json({message:"User not exists"})
          }
          console.log({rows})
          res.json({userData:rows})
         
     
     } catch (error) {
         console.error("Error fetching user data:",error.message)
         res.status(500).json({error:error.message})
     }
     
})

export default WeatherRouter