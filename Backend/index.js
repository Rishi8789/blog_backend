const express = require("express");

const app = express();

app.post("/sinup",(req,res)=>{
    res.send({"msg": "sinup..."})
})

app.post("/login",(req,res)=>{
    res.send({"msg": "login..."})
})

app.get("/blogs",(req,res)=>{
    res.send({"msg":"blogs..."})
})

app.listen("7500",()=>{
    console.log("listening at PORT 7500")
})