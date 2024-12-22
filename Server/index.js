import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import UserRouter from './routes/userRoute.js'
import { verifyToken } from './middleware/VerifyToken.js'
import WeatherRouter from './routes/weatherRouter.js'
import searchRouter from './routes/searchRoute.js'
import nameRouter from './routes/nameRouter.js'



const app=express()

app.use(cors())
app.use(express.json())


app.listen(process.env.PORT,()=>{
    console.log("app is listening")
})

app.get('/',(req,res)=>{
    res.send("Server Started")
})

app.use('/user',UserRouter)

app.use('/auth',nameRouter)
app.use('/search',searchRouter)

app.use('/weather',WeatherRouter)


