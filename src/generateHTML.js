// Require node modules
const path = require("path");
const fs = require("fs");

const employeeTemplates = path.resolve(__dirname, "../src");

const generateHTML = (teamMembers) => {
const html = [];

html.push(
    teamMembers
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => generateManager(manager))
);
html.push(
    teamMembers
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => generateEngineer(engineer))
);
html.push(
    teamMembers
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => generateIntern(intern))
);

return generateEmployee(html.join(""));
};

const generateManager = (manager) => {
let template = fs.readFileSync(path.resolve(employeeTemplates, "manager.html"),"utf8");
template = replacePlaceholders(template, "name", manager.getName());
template = replacePlaceholders(template, "role", manager.getRole());
template = replacePlaceholders(template, "employeeEmail", manager.getEmail());
template = replacePlaceholders(template, "employeeID", manager.getId());
template = replacePlaceholders(
template,"officeNumber",manager.getOfficeNumber());
return template;
};

const generateEngineer = (engineer) => {
let template = fs.readFileSync(
path.resolve(templatesDir, "engineer.html"),
"utf8"
);
template = replacePlaceholders(template, "name", engineer.getName());
template = replacePlaceholders(template, "role", engineer.getRole());
template = replacePlaceholders(template, "employeeEmail", engineer.getEmail());
template = replacePlaceholders(template, "employeeID", engineer.getId());
template = replacePlaceholders(template, "githubUsername", engineer.getGithub());
return template;
};

const generateIntern = (intern) => {
let template = fs.readFileSync(
path.resolve(employeeTemplates, "intern.html"),
"utf8"
);
template = replacePlaceholders(template, "name", intern.getName());
template = replacePlaceholders(template, "role", intern.getRole());
template = replacePlaceholders(template, "employeeEmail", intern.getEmail());
template = replacePlaceholders(template, "employeeID", intern.getId());
template = replacePlaceholders(template, "school", intern.getSchool());
return template;
};

const generateEmployee = (html) => {
const template = fs.readFileSync(
path.resolve(employeeTemplates, "employee.html"),
"utf8"
);
return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
return template.replace(pattern, value);
};

module.exports = generateHTML;