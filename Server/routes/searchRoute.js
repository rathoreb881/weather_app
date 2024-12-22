import express from 'express'
import connectDb from '../db.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { verifyToken } from '../middleware/VerifyToken.js';
const searchRouter = express.Router();




searchRouter.post('/weather',async(req,res)=>{
   
    const{user,city,temperature,humidity,wind_speed}=req.body
   
    
   try {
   
    const Database = await connectDb()

     const [rows] = await Database.query('SELECT * FROM  user_search WHERE user=? AND city=?', [user,city])
    console.log(rows.length)

    if(rows.length>0){
        res.send("city already exists")
    }

    await Database.query("INSERT INTO user_search (user,city,temperature,humidity,wind_speed) VALUES (?,?,?,?,?)", [user,city,temperature,humidity,wind_speed])
    res.send({ message: "usersearch created" })
 
} catch (error) {
    res.send({ error, message: "error is possible" })
}
})

export default searchRouter