const express = require("express");
const app = express ();
app.get ("/", (req, res)=>{
    res.send("Success")
})
app.post("/adduser", (req, res)=>{
    console. log(req.query);
    res.send("Success")
})
app. put ("/edituser/:id", (req, res) =>{
    console. log(req.params);
    res.send ("Success")
})
app. listen(5000);