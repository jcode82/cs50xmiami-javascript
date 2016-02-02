/* 
Name: controlflow.js
Author: Juan Flores
Date: 1-31-16
Prof: Rima
*/

//0-What number's bigger?

do {
  var first = Number(prompt("Enter first number: "));
} while (!Number(first)); 
console.log(first);

do {
  var second = Number(prompt("Enter second number: "));
} while (!Number(second)); 
console.log(second);

greaterNum(first, second);

function greaterNum(first, second){
	var biggerNum = Math.max(first, second);
	alert("The greater number of " + first + " and " + second + " is " + biggerNum + ".");
}

//1-The World Translator



//2-The Grade Assigner

var grade = Number(prompt("What is the number grade?"))

if (grade > 95){
	console.log("Excellent you got an A!");
	}
else if (grade > 85 && grade < 96){
	console.log("Great you got a B!");
	}
else if (grade > 75 && grade < 86){
	console.log("Good you got a C!");
	}
else if (grade > 65 && grade < 76){
	console.log("Poor needs improvment, you got a D!");
	}
else if (grade < 66){
	console.log("Failed, you got an F!");
	}

//3-The Pluralizer

var noun = prompt("Whats your favorite animal: ");
var number0 = Number(prompt("Give me a number: "));

pluralize(noun, number0);

function pluralize(noun, number0){
	console.log(number0 + " " + noun+ "s.");
}

//4-The even/odd reporter

var reporter = 0;

while (reporter <= 20) {
  console.log(reporter);
  reporter = reporter + 2;
}


