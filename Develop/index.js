// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const fileName = 'README.md';

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


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
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
For further questions, please reach me via email: ${email}
`
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
