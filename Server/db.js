import mysql from 'mysql2/promise'

let connection

const connectDb=async()=>{
    if(!connection){
   connection= mysql.createConnection({
        host:process.env.HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME
    })
}
    return connection
}

export default connectDb