// Require Node modules
const fs = require('fs');
const inquirer = require('inquirer');

// Employee Class
const manager = require('./lib/managerClass');
const engineer = require('./lib/engineerClass');
const intern = require('./lib/internClass');

// Generate HTML from objects in team array
const generateHTML = require('./src/generateHTML')

// Employee Array, objects created by function
const teamArray = [];

// Initiate user prompts in terminal
function start() {
    managerInput();
}

// Gather user input via terminal inquirer prompts
function managerInput() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the managers name:'
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'Please enter the managers employee ID:'
            },
            {
                type: 'input',
                name: 'employeeEmail',
                message: 'Please enter the managers email:'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter the managers office number:'
            },
        ])
}
