//Line//

function makeLine(size) {
    let hashtagAmount = "";
    for (let i = 0; i < size; i++) {
        hashtagAmount += "#";
    }
    return hashtagAmount;
}
console.log(makeLine(10));


//Square//

function makeSquare(size) {
    let lengthOfSquare = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            lengthOfSquare += "#";
        }
        if (i < size - 1) {
            lengthOfSquare += "\n";
        }
    }
    return lengthOfSquare;
}
console.log(makeSquare(7));

//Rectangle//

function makeRectangle(width, height) {
    let rectangleOutput = "";
    for (let i = 0; i < height; i++) {
        rectangleOutput += makeLine(width);
        if (i < height - 1) {
            rectangleOutput += "\n";
        }
    }
    return rectangleOutput;
}
console.log(makeRectangle(9, 6));

//Triangle//

function makeDownwardStairs(height) {
    let stairCase = "";
    for (let i = 1; i < height + 1; i++) {
        stairCase += makeLine(i);
        if (i < height) {
            stairCase += "\n";
        }
    }
    return stairCase;
}
console.log(makeDownwardStairs(20));


//Spaces//

function makeSpaceLine(numSpaces, numChars) {
    let spaces = "";
    let characters = "";
    let joinedStrings = "";
    for (let i = 0; i < numSpaces; i++) {
        spaces += " ";
    }
    for (let i = 0; i < numChars; i++) {
        characters += "#";
    }
    joinedStrings = spaces + characters + spaces;
    return joinedStrings;
}
console.log(makeSpaceLine(3, 5));


//Isosceles Triangle//

function makeIsoscelesTriangle(height) {
    let triangleOutput = "";
    for (let i = 0; i < height; i++) {
        triangleOutput += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return triangleOutput.slice(0, -1);
}
console.log(makeIsoscelesTriangle(7));

//Diamonds//
function reverseStuff(str) {
    let lines = str.split('\n');
    let reversed = lines.reverse().slice(1).join('\n');
   
    return reversed;
}




function makeDiamond(height) {
    let topOfDiamond = makeIsoscelesTriangle(height);
    let bottomOfDiamond = reverseStuff(topOfDiamond);
    return topOfDiamond + '\n' + bottomOfDiamond;
}
console.log(makeDiamond(7));