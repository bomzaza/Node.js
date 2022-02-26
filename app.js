const express = require("express")
//const chalk = require("chalk")
const debug = require("debug")
const req = require("express/lib/request")
const res = require("express/lib/response")
const app  = express()
const port = 3000
app.get("/", (req,res)=>{

    res.send('Hello Banlang dgfgdfgdf')

})

app.listen(port, ()=>{
    console.log("Listening on port "+ port)
})