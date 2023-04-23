const express = require('express');
const connectDB = require('./db/connect')
require('dotenv').config();
require('express-async-errors')
const app = express();
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const productRouter = require('./routes/products')

const connString = process.env.MONGO_DB_URI
const port = process.env.PORT || 3001



// Middlewares

app.use(express.json())

//Routes

app.use('/api/v1/products', productRouter)

// error handlers

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


//start server

const StartServer = async () =>{
    try {
        await connectDB(connString)
        console.log("Database Connected");
        app.listen(port, ()=>{
            console.log(`App listening on port ${port}`);
        })
    } catch (error) {
        console.log(error)
    }
}

StartServer()