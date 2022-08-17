require('dotenv').config();
const express = require('express');
const db=require("./config/db");
const attendesRouter=require("./routes/attendes");
const eventsRouter=require("./routes/events");
const cors=require("cors");

const app=express()
const port=process.env.PORT||3000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome to the server');
});

app.use('/attendes',attendesRouter);
app.use('/events',eventsRouter);

app.listen(port,()=>{
    console.log('Server is up on the port '+port+" !")
})