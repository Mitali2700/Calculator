//jshint esversion:6

const express = require("express");
const bodyParser=require("body-parser");
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

/* 
<H1 align="center">Calcuolator<H1>
<H2>Technologies used</H2>
 
*/

/*
We need to be able to get that data into here, into this callback function, so we can calculate the output,and then 
send the result back to the browser.Now, in order to tap into those pieces of data, we have to install another NPM 
package, which is called Body Parser.So let's head over to our command line, and Command C to exit our server, and 
then we're going to npm install - "npm install body-parser"
*/