const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, employeeID, employeeEmail, githubUsername) {
    super(name, employeeID, employeeEmail);
    this.githubUsername = githubUsername;
    this.title = "Engineer";
  }

  getGithub() {
    return this.githubUsername;
  }
}
module.exports = Engineer;