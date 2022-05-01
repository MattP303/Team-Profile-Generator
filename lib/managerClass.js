const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, employeeID, employeeEmail, officeNumber) {
    super(name, employeeID, employeeEmail);
    this.officeNumber = officeNumber;
    this.title = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}
module.exports = Manager;