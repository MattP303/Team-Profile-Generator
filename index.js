// Require Node modules
const fs = require('fs');
const inquirer = require('inquirer');

// Employee Class
const manager = require('./lib/managerClass');
const engineer = require('./lib/engineerClass');
const intern = require('./lib/internClass');

// Generate HTML from objects in team array
const generateHTML = require('./src/generateHTML');
const Choices = require('inquirer/lib/objects/choices');

// Employee Array, objects created by function
const teamArray = [];

// Initiate user prompts in terminal
function start() {
    managerInput();
}

// Gather user input via terminal inquirer prompts
// Start with manager information per acceptance criteria
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
        .then((val) => {
            const manager = new Manager(
                val.name,
                val.employeeID,
                val.employeeEmail,
                val.officeNumber
            );
            console.table(Manager);
            teamArray.push(Manager);
            addMember();
        });
}

// Prompt user if they would like to add a team member, if yes, what type
function addMember() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Would you like to add another team member?',
            choices: ['Engineer', 'Intern', 'Done for now!'],
        },
    ])
    .then((val) => {
        if (val.employeeType === 'engineer') {
            engineerInput();
        } else if (val.employeeType === 'intern') {
            internInput();
        } else {
            generateHTML();
        }
    });
}

// Gather engineer iformation if user opted to add 
