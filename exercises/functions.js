/* 
Name: functions.js
Author: Juan Flores
Date: 1-31-16
Prof: Rima
*/

//0-The Fortune Teller part 2

var numChildren = prompt("How many Children do you have? ");
var partner = prompt("What is your partners name? ");
var geoLocation = prompt("What city do you live in? ");
var jobTitle = prompt("What is your job title? ");

tellFortune(numChildren, partner, geoLocation, jobTitle);

function tellFortune(numChildren, partner, geoLocation, jobTitle){
	alert("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partner + " with" + numChildren + " kids.");
}

//1-The Age Calculator part 2

var birthYr = prompt("What year were you born? ");
var currentYr = new Date().getFullYear();

calculateAge(birthYr, currentYr);

function calculateAge(birthYr, currentYr){
	var age = currentYr - birthYr;
	alert("You are either " + age + " or " + --age);
}

//2-The Lifetime Supply Calculator part 2

var age = 33;
var amountPerDay = prompt("How many favorite snacks per day? (i.e. apples)");

calculateSupply(age, amountPerDay);

function calculateSupply(age, amountPerDay){
	var maxAge = 90;
	var daysInAyear = 365;
	alert("You will need " + ((maxAge - age) * (amountPerDay * daysInAyear)) + " snacks to last you until the ripe old age of " + maxAge + ".");
}

//3-The Geometrizer part 2

var diameter = prompt("Enter value of a Diameter: ")
var radius = diameter / 2; 

calcCircumfrence(radius);

function calcCircumfrence(radius){
	var circumference = (2 * 3.14) * radius
	alert("The circumference is " + circumference);
}

calcArea(radius);

function calcArea(radius){
	var area = (3.14) * Math.pow(radius, 2);
	alert("The area is " + area);
}

//4-The Temperature Converter part 2

var fsymbol = '\u2109';
var csymbol = "\u2103";

celsiusToFahrenheit(fsymbol,csymbol);

function celsiusToFahrenheit(fsymbol,csymbol){
	var celcius = prompt("how cold is it outside in celcius? ");
	var fahrenheit = ((celcius * 9) / 5) + 32;
	alert(celcius + csymbol + " is " + fahrenheit + fsymbol);
}

fahrenheitToCelsius(fsymbol,csymbol);

function fahrenheitToCelsius(fsymbol,csymbol){
	var fahrenheit = prompt("how cold is it outside in fahrenheit? ");
	var celcius = (((fahrenheit - 32) * 5) / 9);
	alert(fahrenheit + fsymbol + " is " + celcius + csymbol);
}




