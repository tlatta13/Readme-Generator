function generateMarkdown(data) {
  return `
# ${data.title}
## Description
${data.description}
## Table of Content
1. [Installation](#installation)
2. [License](#license)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Test](#test)
6. [Questions](#questions)
<a name="installation"></a>
## Installation
${data.installation}
<a name="license"></a>
## License
![Bower](https://img.shields.io/badge/License-$(data.license))
<a name="usage"></a>
## Usage
${data.usage}
<a name="contribution"></a>
## Contribution
${data.contribution}
<a name="test"></a>
## Test
${data.test}
<a name="questions"></a>
## Questions
* ${data.username}
* ${data.email}
`;
}

module.exports = generateMarkdown;