const Intern = require('../lib/internClass');
const Employee = require('../lib/employee');

//   Make sure the intern is indeed an intern
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Bob", 555, "test@test.com", "University of Denver");
    expect(e.getRole()).toBe(testValue);
  });


  test("Can set school via constructor", () => {
    const testValue = "University of Denver";
    const e = new Intern("Bob", 555, "email@school.edu", testValue);
    expect(e.school).toBe(testValue);
  });
  
  test("Can get school via getSchool()", () => {
    const testValue = "University of Denver";
    const e = new Intern("Bob", 555, "email@school.edu", testValue);
    expect(e.getSchool()).toBe(testValue);
  });