import express from 'express'
import connectDb from '../db.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { verifyToken } from '../middleware/VerifyToken.js';
const nameRouter = express.Router();




nameRouter.get('/name',verifyToken,async(req,res)=>{
   
    const{Name}=req.user
    console.log(`6:${Name}`)

    if (!Name) {
        return res.status(400).json({ message: "Name not found in token" });
    }
   res.json({Name})
   console.log("Response sent")
    
})

export default nameRouter