//jshint esversion:6

const express = require("express");

const app= express();

app.get("/", function(req,res){
    res.sendFile(__dirname);
});

app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});

// For sending individual bits of HTML data we use res.send
// For sending entire webpage like "index.html" we use
// go to: expressjs.com  then go to   API reference 4x 
// here we get - res.sendFile 
