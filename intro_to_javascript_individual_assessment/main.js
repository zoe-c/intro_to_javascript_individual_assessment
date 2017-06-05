// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
var givenName;
// A: "givenName" isn't equal to anything. It is just the name of a variable, it hasn't been assigned a value. If console.log(ed) it would return as "undefined."


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A: It is set to the string (data type), specifically, the string "Tim."


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A: "givenName" is set to itself, right now? Considering the last givenName var was set to the string "Tim," is still "Tim".


// 4.
// What is `greeting` set to?
var greeting = "Hello, how are you? " + givenName;
// A:var greeting is set to the concatenated value of the string "Hello, how are you? " and the value of givenName ("Tim" at the moment). This should output the string "Hello, how are you? Tim".


// 5.
// What is `math` set to?
var high = 50;
var low  = 10;
var math = high - low;
// A: var math is set to subtract the value of var low (10) from the value of var high (50). This should return a number value for var math as well (50 - 10 = 40    math will be set to 40).


// 6.
// What is `math` set to?
math = high - "5";
// A: Because 'high' has already been defined as having the number value of 50, and is first in the value assignment, 'math' will proceed with treating the string "5" as a number value and, in the end, 'math' is now set to 45.


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
var born = 1984;
var today = 2017;
var age = today - born;
var timsAge = "Tim is " + age + " years old";
console.log(timsAge);
//ALSO AN ANSWER FOR 7.  VVVVV--------
var age = "Tim is " + (today - born) + " years old";
console.log(age);



// 8.
// Adjust this code. Store some information in the following variables.
// A:
var yourName = "Zoe";
var instructorName = "Kelly";


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:....What? the above var values should work just fine with the statement below...


// This statement should read correctly
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
var myNumber = 666;
var myString = "And also with you";
var myBoolean = "she" > "he";
// This one's a little tricky - think carefully about what makes a value "undefined"!
var myUndefined;
// A: For the undefined value to "return", I will not assign this variable a value. The notes from last night's lesson mentioned for us to think of undefined as a "system level/ unexpected error-like absense of value."


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
var x = (false == 0);
// A. true


// 12.
var y = (false == "");
// A. true


// 13.
var z = (0 == "");
// A. true


// 14.
var a = (null == null);
// A. true

// 25.
var b = (undefined == undefined);
// A. true


// 16.
var c = (undefined == null);
// A. true   this only because the '==' is more *fluid in its comparison than the stict '==='


// 17.
var d = (null == false);
// A. false          note: this was a guessed answer, based on the fact that null is more 'void' than it is 'false'....I'd like to go over why this is! (but then again, can google) ;)



// 18.
var e = (NaN == null);
// A. false    Nan isn't equivalent to anything!


// 19.
var f = (NaN == NaN);
// A. false    I remember that this was noted as a "special case"! NaN is not even equal to itself!


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
var thirsty = true;

if (thirsty) {
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
var x;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False! will be logged because the variable is undefined...and that is 'else.'


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False!    .....I think I understand why...


// 23.
// this expression will set x to NaN
var x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: this returns the message False!... but do you even need a conditional for this? I mean, I guess because NaN is, essentially, a boolean 'false' value... this would mean it was 'else'.. did I just rubber duck at you?


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False! ... following the same train of thought as before/ above ^


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True!    this is a true statement... it falls within the 'if' return.


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True!  This is a string... true = if. Strings have the.. inherit value (?) of true..


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: the {} indicates an object in JS... objects are true... this returns True!


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True!    (this is an object)


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True! 


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and request an instructor.
