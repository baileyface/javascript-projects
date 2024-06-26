const { runProgram } = require("../../../../Candidate-Testing-Autograded/candidate-testing");

let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas(commaString) {
	//TODO: 1. create and instantiate your variables.
	let check = commaString;
	let output;
	//TODO: 2. write the code required for this step
	if (check.includes(",")) {
		output = check.split(",").reverse().join(",");
	}
	
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
} 
console.log(reverseCommas(protoArray1));

//3)
function semiDash(semiColonString) {
	let check = semiColonString;
	let output;
//TODO: write the code required for this step
	if (check.includes(";")) {
		output = check.split(";").sort().join("-");
	}
  
	return output;
}
console.log(semiDash(protoArray2));
//4)
function reverseSpaces(spacesString) {
	let check = spacesString;
	let output;
  //TODO: write the code required for this step
	if (check.includes(" ")) {
		output = check.split(" ").sort().reverse().join(" ");
	}
	return output;
}
console.log(reverseSpaces(protoArray3));
//5)
function commaSpace(commaSpaceString) {
	let check = commaSpaceString;
	let output;
	//TODO: write the code required for this step
	if (check.includes(", ")) {
		output = check.split(", ").reverse().join(",");
	}
	return output;
}
console.log(commaSpace(protoArray4));
// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
