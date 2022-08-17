require('dotenv').config();
const express = require('express');
const cors=require("cors");

const app=express()
const port=process.env.PORT||3000;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Welcome to the server');
});

app.listen(port,()=>{
    console.log('Server is up on the port '+port+" !")
})