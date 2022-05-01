// Require Node modules
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// Employee Class
const Manager = require('./lib/managerClass');
const Engineer = require('./lib/engineerClass');
const Intern = require('./lib/internClass');

// Set directory and path for HTML output
const OUTPUT_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(OUTPUT_DIR, 'teamProfile.html');

// Generate HTML from objects in team array
const generateHTML = require('./src/generateHTML');

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
            console.table(manager);
            teamArray.push(manager);
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
        if (val.employeeType === 'Engineer') {
            engineerInput();
        } else if (val.employeeType === 'Intern') {
            internInput();
        } else {
            generateMemberHTML();
        }
    });
}

// Gather engineer iformation if user opted to add 
function engineerInput() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the engineers name:'
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter the engineers employee ID:'
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Please enter the enigneers email:'
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Please enter the engineers GitHub username:'
        },
    ])
    .then((val) => {
        const engineer = new Engineer(
            val.name,
            val.employeeID,
            val.employeeEmail,
            val.githubUsername
        );
        console.table(engineer);
        teamArray.push(engineer);
        addMember();
    });
}

// Gather intern iformation if user opted to add 
function internInput() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the interns name:'
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter the interns employee ID:'
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Please enter the interns email:'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the interns school:'
        },
    ])
    .then((val) => {
        const intern = new Intern(
            val.name,
            val.employeeID,
            val.employeeEmail,
            val.school
        );
        console.table(intern);
        teamArray.push(intern);
        addMember();
    });
}
// Creat html file from user inputs
function generateMemberHTML() {
    if (!fs.existsSync('./dist')) {
        fs.mkdirSync('./dist');
    } else {
        fs.writeFileSync(outputPath, generateHTML(teamArray), 'utf-8');
        console.log('Great! Your new team profile is located in the dist directory.')
    }
}

// Fire user input function
start();