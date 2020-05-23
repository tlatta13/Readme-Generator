function generateMarkdown(data) {
  return `
# ${data.title}
## Description
${data.description}
## Table of Content
* {![Installation](#installation)}
* {![License](#license)}
* {![Usage](#usage)}
* {![Contribution](#contribution)}
* {![Test](#test)}
* {![Questions](#questions)}
## Installation
${data.installation}
## License
![Bower](https://img.shields.io/bower/l/js)
## Usage
${data.usage}
## Contribution
${data.contribution}
## Test
${data.test}
## Questions
${data.username}
${data.email}
`;
}

module.exports = generateMarkdown;