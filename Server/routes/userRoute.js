import express from 'express'
import connectDb from '../db.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
const UserRouter = express.Router();

/**API to send Information of User in DB */

UserRouter.post('/register', async (req, res) => {
    const { name, userName, email, password } = req.body
    
    try {
        const Database = await connectDb()

        const [rows] = await Database.query('SELECT * FROM  user_signup WHERE Email=?', [email])
        
        if (rows.length>0) {

            return res.status(404).send({ message: "user already exists" })

        } else {

            const hashPassword = await bcrypt.hash(password, 10)
            await Database.query("INSERT INTO user_signup (Name,Username,Email,Password) VALUES (?,?,?,?)", [name, userName, email, hashPassword])
            res.status(201).send({ message: "user created" })
        }

    } catch (error) {
        res.send({ error, message: "error is possible" })
    }
})



UserRouter.post('/login',async(req,res)=>{
    
    const{email,password}=req.body
   try {
   
    const Database = await connectDb()
    
     const [rows] = await Database.query('SELECT * FROM  user_signup WHERE Email=?', [email])
     
     if (rows.length===0) {
       return res.json({message:"User not exists"})
     }
     
     const passMatch=await bcrypt.compare(password,rows[0].Password)
    
    
    if(!passMatch){
       return res.send({message:"wrong password"})
    }
    const payload = {
        Id: rows[0].Id,
        Name: rows[0].Name,
      }
    const token= jwt.sign(payload,process.env.JSON_KEY,{expiresIn:"6d"})
    console.log(payload)      
     res.status(201).json({message:"sucess",token})          
     
} catch (error) {
    res.send(error.message )
}
})



export default UserRouter