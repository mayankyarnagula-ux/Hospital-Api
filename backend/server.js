const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);


mongoose.connect("mongodb+srv://mayankyarnagula_db_user:Api@hospital.gxwuajf.mongodb.net/?appName=hospital")
.then(()=>{
    console.log("db connected")
})


app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(6000,()=>{
    console.log("server started")
})