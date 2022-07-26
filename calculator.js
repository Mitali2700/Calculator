//jshint esversion:6

const express = require("express");

const app= express();

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    res.send("Thanks for posting that.")
});

app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});

// For sending individual bits of HTML data we use res.send
// For sending entire webpage like "index.html" we use
// go to: expressjs.com  then go to   API reference 4x 
// here we get - res.sendFile 


// What is 404 not found
// HTTP return code cheat sheet
// 100 - Hold on
// 200 - Here you go
// 300 - Go away
// 400 - You screwed up
// 500 - I screwed up