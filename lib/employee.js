class Employee {
    constructor(name, employeeID, employeeEmail) {
      this.name = name;
      this.employeeID = employeeID;
      this.employeeEmail = employeeEmail;
      this.title = "Employee";
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.employeeID;
    }
  
    getEmail() {
      return this.employeeEmail;
    }
  
    getRole() {
      return this.title;
    }
  }
  module.exports = Employee;