// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  // Write your unit tests here!
  
  test("should return 'nonprofit' for organization key", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });
  
  test("should return 'Jeff' for executiveDirector key", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("should return 100 for percentageCoolEmployees key", () => {
    expect(launchcode.percentageCoolEmployees).toBe("100");
  });

  test("should correctly validate programsOffered array", () => {
    expect(launchcode.programsOffered).toContain('Web Development');
    expect(launchcode.programsOffered).toContain('Data Analysis');
    expect(launchcode.programsOffered).toContain('Liftoff');
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("launchOutput should return the correct strings based on divisibility", () => {
    expect(launchcode.launchOutput(2)).toBe('Launch!');
    expect(launchcode.launchOutput(3)).toBe('Code!');
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks!');
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  })

});