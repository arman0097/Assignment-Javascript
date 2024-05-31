
// 1. Create a variable called `carName`, assign the value `Volvo` to it.
let carName = "Volvo";



// On one single line, declare three variables with the following names and values:
let firstName = "john" , lastName = "Doe" , age = "35";
console.log(lastName);

let personInfo = {firstName : "john", lastName : "Doe", age : "35"}
console.log(personInfo.firstName)


// Use the correct assignment operator that will result in x being 50 (same as x = x * y).
x = 10;
y = 5;
x = x*y;
console.log(x);  // 50 the value of x 


// Use comments to describe the correct data type of the following variables:
let length = 16; //  number data type 
let lasttName = "Johnson"; // string data type

const v = {
  firstName: "John",  
  lastName: "Doe"
};    // object data type
console.log(typeof(v));


// Execute the function named myFunction.
function myFunction() {
    alert("Hello World!");
  } 
myFunction(); // myFunction that displays an alert "Hello World!" when called. 
// call the function and see the output 


// Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
const person ={
    nAme : "john",
    age : 50,
}
alert(person.nAme + " is " + person.age);


// Array Related Question 
// 1. Alert the number of items in an array, using the correct Array property: 
const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length); // This will 3


// Change the first item of Brand to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"]; 
Brand[0] = "Ford"; // Change the first item to "Ford"
console.log(Brand)


// Math Related Problems
// 1. Use the correct Math method to create a random number.
let randomNumber = Math.random();
console.log(randomNumber);


// 2. Use the correct Math method to return the largest number of 10 and 20.
let largestNumber = Math.max(10,20);
console.log(largestNumber); // largestNumber 20


// Use the correct Math method to get the square root of 9.
let mathSquare = Math.sqrt(9);
console.log(mathSquare);


// Choose the correct comparison operator to alert true, when x is greater than y.
let x = 510;
let y = 55;
if(x>y){
    alert(true);
}else{
    alert(false);
}


//Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let menAge = 17;
let youngman = menAge < 18 ? "Too young" : "Old enough" ;
console.log(youngman);

