//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore) {
        this.scores.push(newScore);
    }

    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }

        const avg = sum / this.scores.length;

        const roundedAvg = Math.round(avg * 10) / 10;
        return roundedAvg;
    }

    status() {
        const avg = this.average();

        let status;

        if (avg >= 90) {
            return 'Accepted';

        } else if (avg >= 80) {
            return 'Reserve';

        } else if (avg >= 70) {
            return 'Probationary';

        } else {
            return 'Rejected';
        }
        
        return `${this.name} earned an average test score of ${avg}% and has a status of ${status}.`
    
    }

}



const bear = new CrewCandidate('Bubba Bear', '135 kg', [88, 85, 90]);

const maltese = new CrewCandidate('Merry Maltese', '1.5 kg', [93, 88, 97]);

const gator = new CrewCandidate('Glad Gator', '225 kg', [75, 78, 62]);


//console.log(bear);
//console.log(maltese);
//console.log(gator);

//bear.addScore(83);

//console.log(bear.scores);

//console.log(`Merry's average test score: ${maltese.average()}`);

//console.log(`${bear.name} earned an average test score of ${bear.average()}% and has gotten a status of ${bear.status()}.`);
//console.log(`${maltese.name} earned an average test score of ${maltese.average()}% and has a status of ${maltese.status()}.`);
//console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`);

console.log(bear.status());
console.log(maltese.status());
console.log(gator.status());


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.


let testCount = 0;

while (gator.status() !== 'Reserve' && gator.status() !== 'Accepted') {
    gator.addScore(100);
    testCount++;
}

//console.log(`${gator.name} reached Reserved status after ${testCount} tests with an average test score of ${gator.average()}% and a status of ${gator.status()}.`)

while (gator.status() !== 'Accepted') {
    gator.addScore(100);
    testCount++;
}


//console.log(`${gator.name} reached Accepted status after ${testCount} total tests with an average test score of ${gator.average()}% and a status of ${gator.status()}.`)