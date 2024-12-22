import express from 'express'
import connectDb from '../db.js';

import jwt from 'jsonwebtoken'
import 'dotenv/config'







export const verifyToken=async(req,res,next)=>{
    try {
        const token=await req.headers.authorization.slice(7)
       
       
        if(!token){
            return res.json({message:"no token provided"})
        }
       const decodeToken=jwt.verify(token,process.env.JSON_KEY)
       
       const userName=decodeToken.Name
       req.user={Name:userName}
    
        next()
    
    } catch (error) {
        res.json(`Errror: ${error.message}`)
    }
}