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



/************************************ TASK 1- ADDING 2 NUMBERS ************************************/
app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    // console.log(req.body.num1);
    // res.send("Thanks for posting that.")

    // var num1 = req.body.num1;
    // var num2 = req.body.num2;
    //  They will append the num1 and num2

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1+ num2;
    res.send("The result of the calculation is "+ result);
});




/************************************ TASK 2 - BMI Calculator *************************************/

app.get("/bmiCalculator", function(_req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi =weight/(height*height);
    res.send("Your BMI is "+bmi);
    //res.send("Your BMI is "+bmi+"\nBMI Categories:\n Underweight = <18.5\n Normal weight = 18.5–24.9\n Overweight = 25–29.9\n Obesity = BMI of 30 or greater\n");
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

*/

/*
We need to be able to get that data into here, into this callback function, so we can calculate the output,and then 
send the result back to the browser.Now, in order to tap into those pieces of data, we have to install another NPM 
package, which is called Body Parser.So let's head over to our command line, and Command C to exit our server, and 
then w<H1 align="center">Calculator <img src=https://user-images.githubusercontent.com/78539161/181079170-d5f38835-4dca-4664-88c3-4fe8c1215d49.png height="40"></H1>
<H2>Technologies used</H2>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
<a href="https://nodejs.org/api/" target="_blank" rel="noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/128px-Node.js_logo.svg.png" alt="Node.js" width="60"></a>
<a href="https://www.npmjs.com/" target="_blank" rel="noreferrer"><img src="https://user-images.githubusercontent.com/78539161/180617223-47849d60-5538-43b7-8474-77d9db58728b.png" alt="npm" width="40"></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://user-images.githubusercontent.com/78539161/180755429-687cd845-0559-4140-9069-4a453ac307b7.png" alt="Express.js" height="18"></a>
<a href="https://hyper.is/" target="_blank" rel="noreferrer"><img src="https://user-images.githubusercontent.com/78539161/180262577-2538fca2-5701-4db4-a2fd-0871adc4af84.svg" width="40" height="40"></a>


<H2>Screen Shot: Calculator</H2>
<H3>Screenshot 1</H3>

![calc1](https://user-images.githubusercontent.com/78539161/181614673-0cb25279-8282-4ce9-9a9c-41a013f623df.png)

<H3>Screenshot 2</H3>

![calc2](https://user-images.githubusercontent.com/78539161/181614696-01665821-51c5-4d38-924a-a64c8ef4356d.png)

<H3>Screenshot 3</H3>

![calc3](https://user-images.githubusercontent.com/78539161/181614710-560f8ae3-b557-47a2-b1fa-96d56a6344d5.png)

<H2>Screen Shot: BMI Calculator</H2>
<H3>Screenshot 1</H3>

![bmi1](https://user-images.githubusercontent.com/78539161/181614737-f44fa9db-171c-4e2f-b884-f99f3c57fe35.png)

<H3>Screenshot 2</H3>

![bmi2](https://user-images.githubusercontent.com/78539161/181614721-56c36f48-8609-46bb-9fb4-6d982576c084.png)

<H3>Screenshot 3</H3>

![bmi3](https://user-images.githubusercontent.com/78539161/181614795-8aab372f-974e-42eb-a264-7571b0552e11.png)
e're going to npm install - "npm install body-parser"
*/

// JSON File - 
/*
JSON Example
{"employees":[
  { "firstName":"John", "lastName":"Doe" },
  { "firstName":"Anna", "lastName":"Smith" },
  { "firstName":"Peter", "lastName":"Jones" }
]}
XML Example
<employees>
  <employee>
    <firstName>John</firstName> <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName> <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName> <lastName>Jones</lastName>
  </employee>
</employees>
*/
