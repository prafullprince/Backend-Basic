// require instance of express and other things which required
const express = require("express");
require("dotenv").config();
const mongoose = require('mongoose');

// make app
const app = express();
// make port
const PORT = process.env.PORT;

// add middlewares
// for parsing json data
app.use(express.json());

// listen our app at given port
app.listen(PORT,()=>{
    console.log(`Server started successfully at port ${PORT}`);
});

// connect server with database
mongoose.connect(process.env.DATABASE_URL)
.then(()=>{console.log(`databse connected successfully`)})
.catch((error)=>{console.log(`database not connected ${error}`)});

// make a get request
app.get('/',(req,res)=>{
    res.send("Get request fetched successfully");
});

// make a post req
app.post('/api/cars',(req,res)=>{
    const {name,color} = req.body;
    res.send(`name of car is ${name} and color of car is ${color}`);
});
