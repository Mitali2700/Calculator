//jshint esversion:6

const express = require("express");
const bodyParser=require("body-parser");

const app= express();
//app.use(bodyParser.text)              // So parse the requests into text
//app.use(bodyParser.json)              //So it will looks a bit like javascript objects, or the one that we are going to be using is:
app.use(bodyParser.urlencoded({extended:true}))        // Parse HTML kind of data

/************************body-parse ************************
            It allows you to go into any of your routes, 
        and you can trap into something called request.body
*/

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    // console.log(req.body.num1);
    // res.send("Thanks for posting that.")

    var num1 = req.body.num1;
    var num2 = req.body.num2;

    var result = num1+ num2;
    res.send("The result of the calculation is "+ result);
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