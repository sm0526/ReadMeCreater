// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Please enter the best email to contact you:',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'Please enter the name of your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief description of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the kind of license your project will have:',
        choices: ['None', 'MIT', 'APACHE 2.0', 'BSD 3', 'GPL 3.0'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Which command should be used to install any dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Which command should be used to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using your project?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is a common question about your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What should anyone interested in contributing to the repo need to know?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Creating README...');
        writeToFile('README.md', generateMarkdown({
            ...inquirerResponses
        }));
    });
}

// Function call to initialize app
init();
