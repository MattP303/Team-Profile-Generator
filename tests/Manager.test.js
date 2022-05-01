const Manager = require('../lib/managerClass');
const Employee = require('../lib/employee');

test("Can user set office number", () => {
    const testValue = 100;
    const e = new Manager("Bob", 444, "email@email.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });
  
  
  test("Can user get office number from getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Bob", 444, "email@email.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });

  test('getRole() returns "Manager"', () => {
    const testValue = "Manager";
    const e = new Manager("Bob", 444, "email@email.com", 555);
    expect(e.getRole()).toBe(testValue);
  });