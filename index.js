//import express from "express"

const express = require('express');

//create instace of express
const app = express();
app.use(express.json());


//create a route

app.get("/ping",(req,res) =>
{
    res.send("Pong");
});

app.get("/Pranav",(req,res) =>
{
    res.send("user is pranav");
});


app.post("/login" ,async(req,res)=>
{
    try{
        const userName = req.body.username;
    const password = req.body.password;

    if(!password)
    {
        res.send("invalid")
    }
    else if(password === "1234")
    {
        res.send("login successful");
    }
    else{
        res.send("invalid");
    }
    }
    catch(e)
    {
        console.log(e)
    }
    

});
//start server

app.listen(8000,()=>
{
    console.log("server is live on :8000 ");
});