// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('fs').promises;
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
            type: 'input',
            name: topics[4],
            message: questions[4],
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
    const file = ({ data }) =>
`# ${projectName} ${badge}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#contribute)
- [Test](#test)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${license}

## How to Contribute

${contribute}

## Tests

${test}

## Questions

Github Profile: ${username}
For further questions, please reach me via email: ${email}`;
return file;
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((data) => writeFile(fileName, writeToFile(data)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
