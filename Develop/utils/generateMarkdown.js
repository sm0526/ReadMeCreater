// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License 
    
  This project is licensed with the ${license} license`;
    } else {
      return '';
    }
  }

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.projectName}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Tests](#tests)

  * [Contributing](#contributing)

  * [Questions](#questions)

  ## Installation

  To install any necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Tests

  To run any tests, run the following command:

  \`\`\`
  ${data.tests}
  \`\`\`

  ## Contributing

  ${data.contributing}

  ## Questions

  A common question about the repo is:

  ${data.questions}

  If you have any other questions about the repo, open an issue or contact me personally at ${data.email}. 

  You can find more of my work at [${data.username}](https://github.com/${data.username}/).
`;
  }

  module.exports = generateMarkdown;
