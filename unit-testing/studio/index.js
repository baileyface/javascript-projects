
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: "100",
    programsOffered: ['Web Development', 'Data Analysis', 'Liftoff'],
    launchOutput: (number) => {
        if (number % 2 === 0 && number % 3 === 0 && number % 5 === 0) {
            return 'LaunchCode Rocks!';
        else if (number % 2 === 0 && number % 3 === 0) {
            return 'LaunchCode!';
        else if (number % 3 === 0 &&& number % 5 === 0) {
            return 'Code Rocks!';
        else if (number % 2 === 0 && number % 5 === 0) {
            return 'Launch Rocks! (CRASH!!!!)';
        else if (number % 2 === 0) {
            return 'Launch!';
        else if (number % 3 === 0) {
            return 'Code!';
        else if (number % 5 === 0) {
            return 'Rocks!';
        } else {
            return "Rutabagas! That doesn't work.";
        }
    }
}
        }
        }
        }
    }
  }
}

module.exports = launchcode;

