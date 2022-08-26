// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === 'MIT') {
    badge = '![MIT License](https://img.shields.io/badge/license-MIT-green)';
  } else if (license === 'BSD') {
    badge = '![BSD License](https://img.shields.io/badge/license-BSD-green)';
  } else if (license === 'Apache') {
    badge = '![Apache License](https://img.shields.io/badge/license-Apache-blue)';
  } else {
    badge = '';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if (license === 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT';
  } else if (license === 'BSD') {
    licenseLink = 'https://opensource.org/licenses/BSD-2-Clause';
  } else if (license === 'Apache') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0';
  } else {
    licenseLink = '';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseLink) {

  let licenseSect = `The application is covered under the ${license} license.  
 ${licenseLink} `
  if (license === 'None') {
    return licenseSect = '';
  }
  return licenseSect;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.projectName}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license, renderLicenseLink(data.license))}

## Contributing

${data.contribute}

## Tests

${data.test}

## Questions

Github Profile: www.github.com/${data.username}/  
For further questions, please reach me via email: ${data.email}`;
}

module.exports = generateMarkdown;
