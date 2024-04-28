const input = require('readline-sync');

let name = input.question("Enter your name: ");
console.log("Hello, " + name + "!");

let otherName = input.question("Please enter last name: ");
console.log("Hello, " + name + " " + otherName + "!");

let firstName = input.question("What is your first name?");
let lastName = input.question("What is your last name?");
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("Last, First: " + lastName + ", " + firstName);
