function printMe(param) { // 'param' is the parameter
  console.log(param);
}

printMe('loading...'); // 'loading...' is the argument

// so this is the defference between an argument and a parameter

const printFunction1 = function(){ //Another way to declare a function is by assigning it as a variable, but this one doesn't have a name
  console.log('This is the first print function');
}

printFunction1();

const printFunction2 = () => { // for this one, instead of using a normal function we use an arrow function
  console.log('This is the second print function');
}

printFunction2();

const printFunction3 = function functionName() { // this is a normal declaration of a function assigned to a variable, this is has a name
  console.log('This is the third print function');
}

printFunction3(); //You can only call it from the variable name, but not the function name

function firstFunction(name) {
  console.log(`This is the ${name} function`);
}

let variableName = firstFunction('first'); //assigning the the value of a function to a variable

function secondFunction() {
  variableName; //retrieving the value of the function stored in the this variable
}

function sum1(a, b) {
  return a + b;
}

sum1(10, 20); //For this one and the one below, the results are stored as a variable until you console.log the stored results

function sum2(c, d) {
  let result = c + d;
  return result;
}

sum2(30, 20);

function sum3(e, f) {
  console.log(e + f);
}

sum3(6, 8); //For this one the console.log code will run to display the results

console.log(sum1(10, 20), sum2(30, 20)); // After you put it in the console, that is when you see the results returned by the two functions

//Default parameters

function calc(a, b=0) { // so it means if there is no parameter for 'b', 0 is its default value
  console.log(2 * (a + b));
}

calc(2, 3); //all the parameters are given
calc(2); //the parameter for 'a' is 2 while for 'b' is not given 
calc(); //since a doesn't have a default value and also no parameter, the result becomes NaN

// Rest parameters (allows acceptance of any number of arguments)

function num1(a, ...b) { //the rest parameter is the one with three dots in front and it si only one and at the end. Which usually means the rest of the parameters
  console.log(a);
  console.log(b); //it prints out the rest of the parameters in 'b'
}

num1(1, 2, 3, 4, 5); // 1 will be stored in 'a' while the rest stored in 'b' since it is a rest parameter

// Arrow functions

const variableFunction1 = function() { // this is the normal declaration of a function by storing it in a variable
  console.log('This is a normal function that we need to change to an arrow function');
}

const variableFunction2 = () => { // for this one, we remove the function keyword and put an arrow before the curly braces to make it an arrow function
  console.log('This is now the arrow function we were talking about earlier');
}

variableFunction1();
variableFunction2(); // they all output on the console as required

const add1 = (a, b) => { // this is a normal arrow function which can be made simple and cleaner as below 
  return a + b;
}

const add2 = (a, b) => a + b; // this is a cleaner code using the arrow function when there is only one value to be returned

console.log(add1(2, 4)); // they all return the same value
console.log(add2(2, 4));

// Nested functions (function inside a function)

function outer() { //This is the outer function
  console.log('This is the outer function');

  function inner() { // This is the inner function
    console.log('This is the inner function'); 
  }

  inner(); //The inner function should be declared within the outer function
}

outer();

// functions scope
/**
 * 1. Varibles defined inside a function cannot be accessed anywhere outside of the function
 * 2. A function can access all the varibles inside the scope that it is defined
 */

// The first rule
function doSomething1() {
  let x = 10;
  const y = 20;
  var z = 30;
}

//console.log(x, y, z); This code brings an error that the variables are not defined. Since they are defined inside a function hence can't be accessed outside that function.
// Even if the varieble is declared as 'var', it can't be accessed.

// The second rule
let x = 10;
const y = 20;
var z = 30

function doSomething2() {
  console.log(x, y, z); //This variables can be accessed because they are defined in the scope as the function, which is the global scope
}

doSomething2();

//closures
function outerFunction(x) { // This is the outer function
  function innerFunction(y) { // This is the inner function
    return x + y; // The inner function is suppossed to return the sum of 'x' which is the parameter of the outer function and 'y', the parameter of the inner function
  }

  return innerFunction; // The outer function returns the inner function
}

const theInnerFunction = outerFunction(2); // The parameter of the outer function is already stored as 2. Which can be used by the inner function

console.log(theInnerFunction(3)); // This will run the inner function which was stored in the variable earlier with the parameter being 3 then diplay it on the console
// console.log(innerFunction(3)); // This won't work because it should be called inside the scope it is defined, which is the outer function

// callback functions
function foo(bar) { // This function takes a function called bar as a parameter and is executed inside the function. This function passed as parameter is called a callback function
  bar();
}

foo(function (){ //Calling the foo function after passing an anonymous function as an argument which prints out the string 'Bar' onto the console
  console.log('Bar 1');
})

function named() { //Instead of using an anonymous function let's use this named function
  console.log('Bar 2');
}

foo(named); // The named function is passed as the argument

// High Order Functions (HOF)
/**
 * 1. It takes one or more functions as an argument
 * 2. It may return a function
 */

function returningFn() { //This function returns an anonymous function that prints out 'returning...' onto the console
  return function (){
    console.log('returning...');
  }
}

const fn = returningFn(); //So when I execute the function, it returns the function stated earlier and stores it in a variable

fn(); //Now that variable is a function returned from the function called 'returningFn'

//IIFE (Immediately Invoked Function Expressions)
// An IIFE is just a function that is executed after it is defined
// It doesn't have a name since you would have to call it later using its name
// It is placed inside a group operator which simply means a paranthesis
// To call it, you need to place paranthesis at the end
(function () {
  console.log('This is an IIFE');  // This is an example of an IIFE in code
}) ();

//Recursion (A function that refers or calls itself)
// It will loop forever until it reaches the call stack limit
// It should have a base condition for breaking the loop

function fetchWater(count) { // For this function, after being called, it checks the condition of the count parameter using the 'if' statement
  if (count === 0) {
    console.log('The bucket is full!');
    return; 
  }

  console.log('Fetching water...');
  fetchWater(count - 1); // This function is calling itself within itself
}

fetchWater(5);


