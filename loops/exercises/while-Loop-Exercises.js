//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.//
const input = require('readline-sync');

let startingFuelLevel;
let numberOfAstronauts;
let altitudeReached = 0;






/*Exercise #4: Construct while loops to do the following:
a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

startingFuelLevel = input.question('What is the starting fuel level?: ');
startingFuelLevel = Number(startingFuelLevel);

while (startingFuelLevel <= 5000 || startingFuelLevel >= 30000) {
    startingFuelLevel = input.question("Invalid input! Please enter a number between 5001 - 29999: ");
    startingFuelLevel = Number(startingFuelLevel);
}  
  
console.log("Perfect! Thank you for your input!");
  
  
//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.//
numberOfAstronauts = input.question('How many astronauts (<=7) are on board?: ');
numberOfAstronauts = Number(numberOfAstronauts);

while (numberOfAstronauts <= 0 || numberOfAstronauts > 7) {
  numberOfAstronauts = input.question("Invalid input! Please enter a number between 1 - 7: ");
  numberOfAstronauts = Number(numberOfAstronauts);
}  

console.log(`Thank you! Number of astronauts on this mission is ${numberOfAstronauts}`);

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.//
while (startingFuelLevel >= (100 * numberOfAstronauts)) {
  startingFuelLevel = startingFuelLevel - (100 * numberOfAstronauts);
  altitudeReached += 50;
}

console.log(`The shuttle gained an altitude of ${altitudeReached} km`);

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (altitudeReached >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}