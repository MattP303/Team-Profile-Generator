const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, employeeID, employeeEmail, school) {
    super(name, employeeID, employeeEmail);
    this.school = school;
    this.title = "Intern";
  }

  getSchool() {
    return this.school;
  }
}
module.exports = Intern;