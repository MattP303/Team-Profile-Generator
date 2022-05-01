const Employee = require('../lib/employee');

test("Verify we get the correct role from getRole", () => {
    const testValue = "Employee";
    const e = new Employee("Bob", 580, "email@domain.eth");
    expect(e.getRole()).toBe(testValue);
  });

test("Verify we have a name from getName", () => {
    const testValue = "Bob";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });
  
  test("Verify we have an employee ID", () => {
    const testValue = 101;
    const e = new Employee("Bob", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
  test("Verify we get an email from getEmail", () => {
    const testValue = "email@domain.eth";
    const e = new Employee("Bob", 415, testValue);
    expect(e.getEmail()).toBe(testValue);
  });
  
