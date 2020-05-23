const inquirer = require("inquirer");
const fs = require("fs");
const newMarkdown = require("./utils/generatemarkdown.js");

const questions = [
        {
          type: "input",
          message: "What is your GitHub username?",
          name: "username",
        },
        {
          type: "input",
          message: "What is your GitHub Email?",
          name: "email"
        },
        {
          type: "input",
          message: "What is the title of your project?",
          name: "title",
        },
        {
            type: "input",
            message: "Describe your project?",
            name: "description"
        },
        {
          type: "input",
          message: "What are the steps to install your project?",
          name: "installation"
        },
        {
            type: "list",
            message: "What license will you use?",
            name: "license",
            choices: [
                "MIT",
                "Apache 2.0",
                "BSD 203",
                "IPL 201",
                "MPL 202",
                "Zlib",
                "GPL v3",
                "Eclipse 201",
            ]
        },
        {
            type: "input",
            message: "How will your project be used?",
            name: "usage"
        },
        {
            type: "input",
            message: "How can others contribute?",
            name: "contribution"
        },
        {
            type: "input",
            message: "How to test your app?",
            name: "test"
        },
      ];

function writeToFile(data) {
    fs.writeFile("README.md", data, err => {
        if (err) {
            console.log(err)
        } else {
            console.log("New ReadMe Created")
        };
    });
};

function init() {
    return inquirer.prompt(questions)
    .then(data => {
        return newMarkdown(data);
    })
    .then(pageMarkdown => {
        return writeToFile(pageMarkdown);
    });
};

init()

