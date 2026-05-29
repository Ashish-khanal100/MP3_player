const express = require("express")
const fs= require("fs")

const app=express()
app.use(express.static("public"))
// app.use(express.static("MP3_player"))

let path="public/songs"
// let path="songs"
app.get("/songs",(req,res)=>{
    fs.readdir(path,(err,files)=>{
        res.json(files)
    })
})

// chaloooo
app.listen(3000,()=>{
    console.log("running Server...")
})


