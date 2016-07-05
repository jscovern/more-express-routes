'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

app.listen(port, function() {
	console.log("server started on port ",port);
});

app.get("/pick_a_color/:color", function(req,res){
	res.send("You picked: "+req.params.color);
});

app.get("/taco/:id", function(req,res) {
	res.send(tacos[req.params.id]);
});

app.get("/burger/:id", function(req,res) {
	res.send(burgers[req.params.id]);
});

app.get("/pickanumber", function(req,res) {
	var guess = parseInt(req.query.number);
	console.log("guess: "+guess);
	var actual = 7;
	console.log(guess === actual);
	if(guess === actual) {
		res.send("You nailed it!  You picked "+guess+" and the actual was "+actual);
	}else if (guess > actual) {
		res.send("You selected "+guess+", and that's too high!");
	} else {
		res.send("You selected "+guess+", and that's too low!");
	}
});

app.get("/multiply", function(req,res) {
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	var product = x * y;
	res.send("You gave me "+x+" as the x variable, and "+y+" as the y variable. The product is "+product+".");
});

app.get("/add", function(req,res) {
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	var sum = x + y;
	res.send("You gave me "+x+" as the x variable, and "+y+" as the y variable. The sum is "+sum+".");
});