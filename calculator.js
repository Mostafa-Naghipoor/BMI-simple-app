const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
});



app.post("/",function(req, res){
  var weight = parseFloat(req.body.num1);
  var height = parseFloat(req.body.num2);
  var bmi = weight/(height*height);
  res.send("the result is " + bmi);
});




app.listen(3000, function(){
  console.log("server started on port 3000");
});
