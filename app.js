const express = require("express");
const app= express();
const PORT= 3000;

app.use('/public', express.static(__dirname + '/public'));

app.listen(3000, ()=>{
    console.log("Conectado al puerto " + PORT)
});

app.get("/", (req,res)=> {
    res.sendFile(__dirname + "/views/index.html")
});
