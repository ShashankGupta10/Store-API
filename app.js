const express = require('express');
const connectDB = require('./db/connect')
require('dotenv').config()
const app = express();
port = 3000



// Middlewares

app.use(express.json())

//Routes

app.get("/hello", (req, res)=>{
    res.send("hello")
})


//start server

const StartServer = async () =>{
    try {
        await connectDB(process.env.MONGO_DB_URI)
        console.log("Database Connected");
        app.listen(port, ()=>{
            console.log(`App listening on port ${port}`);
        })
    } catch (error) {
        console.log(error)
    }
}

StartServer()