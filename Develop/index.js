// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = 'README.md';

const topics = [
    'projectName',
    'description',
    'installation',
    'usage',
    'license',
    'contribute',
    'test',
    'username',
    'email'
]
// TODO: Create an array of questions for user input
const questions = [
    'What is the name of your project?',
    'Provide a short description explaining the what, why, and how of your project.',
    'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    'Provide instructions and examples for use.',
    //license will have a drop down to choose coverage and display badge at top
    'Please choose a license from the provided below.',
    'Provide instructions and guidelines for how to contribute to the project.',
    'Provide a short description of the tests created and instructions on their use.',
    'What is your Github username.',
    'What is your email?'
];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: topics[0],
            message: questions[0],
        },
        {
            type: 'input',
            name: topics[1],
            message: questions[1],
        },
        {
            type: 'input',
            name: topics[2],
            message: questions[2],
        },
        {
            type: 'input',
            name: topics[3],
            message: questions[3],
        },
        {
            type: 'list',
            name: topics[4],
            message: questions[4],
            choices: ['MIT','Apache','BSD','None'],
        },
        {
            type: 'input',
            name: topics[5],
            message: questions[5],
        },
        {
            type: 'input',
            name: topics[6],
            message: questions[6],
        },
        {
            type: 'input',
            name: topics[7],
            message: questions[7],
        },
        {
            type: 'input',
            name: topics[8],
            message: questions[8],
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(data) {
    return generateMarkdown (data);
}
 
// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((answers) => {
            const printedPage = writeToFile(answers);
            fs.writeFile('README.md', printedPage, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!'));
        });
}

// Function call to initialize app
init();
