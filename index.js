// ## Acceptance Criteria

// ```md
// GIVEN a command-line application that accepts user input
// - DONE
// WHEN I am prompted for information about my application repository
// - DONE
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// - DONE
// WHEN I enter my project title
// - DONE
// THEN this is displayed as the title of the README
// - DONE
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// - DONE
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// - DONE
// WHEN I choose a license for my application from a list of options
// - DONE
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// - DONE
// WHEN I enter my GitHub username
// - DONE
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// - DONE
// WHEN I enter my email address
// - DONE
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// - DONE
// WHEN I click on the links in the Table of Contents
// - DONE
// THEN I am taken to the corresponding section of the README
// - DONE

// Using the node packages 
const fs = require('fs'); // Used to create files locally
const inquirer = require('inquirer'); // Used for user interactions
// TODO: Include packages needed for this application


// TODO: Create an array of questions for user input

const questions = [

    {
        // Title of project
        type: "input",
        message: "what the title of your project?",
        name: "name"
    },
    {
        // Description of project
        type: "input",
        message: "Describe your project",
        name: "description"
    },
    {
        // Installation instructions
        type: "input",
        message: "Provide installation instructions: ",
        name: "installation"
    },
    {
        // How to use the project
        type: "input",
        message: "Provide usage information for your Readme: ",
        name: "usage"
    },
    {
        // Who/how can someone contribute to your project
        type: "input",
        message: "Provide guidelines for contribution: ",
        name: "contribution"
    },
    {
        // How can someone test with your code
        type: "input",
        message: "Provide testing instructions for your project: ",
        name: "testing"
    },
    {
        // Username needed for github links
        type: "input",
        message: "What is your username?",
        name: "qQuestions"
    },
    {
        type: "input",
        message: "Enter your email:",
        name: "email"
    },
    {
        // List of Github Licenses
        type: "rawlist",
        message: "Choose your github licensing: ",
        choices: ["Apache 2.0 License",
            "The MIT License",
            "Mozilla Public License 2.0"],
        name: "license"
    },
];
// Create function that creates Title,Description,etc in the Readme
inquirer
    .prompt(questions)
    .then((answers) => {
        const html = getHtml(answers);
        fs.writeFile('README.md', html, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Write SUCCESSFULL!")
            }
        }
        )

    });
// This arrow function deconstrucs the objects from answers
const getHtml = (answers) => {
    const { name, description, installation, usage, contribution, testing, license, qQuestions, email } = answers;
    const apache = ("[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
    const MIT = ("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
    const mozilla_public = ("[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)");
    if (license === "Apache 2.0 License") {
        return `
${apache}
# TILE: ${name}


### Table of Content
- [Description](#description)
- [Installation](#installation-steps)
- [Usage](#usage)
- [Contribution](#contribution-rules)
- [Test](#testing-instructions)
- [License](#license)
- [Questions](#questions)

## DESCRIPTION
${description}

## INSTALLATION STEPS
${installation}


## USAGE
${usage}

## CONTRIBUTION RULES
${contribution}


## TESTING INSTRUCTIONS
${testing}

## LICENSE
${license}

    
## QUESTIONS
Github Profile: https://github.com/${qQuestions}

Github Repositories: https://github.com/${qQuestions}?tab=repositories

If you have additional questions you can reach me at
    ${email}


    `
    } else if (license === "The MIT License") {
        return `
${MIT}

# TILE: ${name}


### Table of Content
- [Description](#description)
- [Installation](#installation-steps)
- [Usage](#usage)
- [Contribution](#contribution-rules)
- [Test](#testing-instructions)
- [License](#license)
- [Questions](#questions)

## DESCRIPTION
${description}

## INSTALLATION STEPS
${installation}


## USAGE
${usage}

## CONTRIBUTION RULES
${contribution}


## TESTING INSTRUCTIONS
${testing}

## LICENSE
${license}

    
## QUESTIONS
Github Profile: https://github.com/${qQuestions}

Github Repositories: https://github.com/${qQuestions}?tab=repositories

If you have additional questions you can reach me at
    ${email}


    `

    }else
// This if statement will put a badhe if a licnese is selected

// The return statement here returns the output as given in the Template Literal 
return `
${mozilla_public}
# TILE: ${name}


### Table of Content
- [Description](#description)
- [Installation](#installation-steps)
- [Usage](#usage)
- [Contribution](#contribution-rules)
- [Test](#testing-instructions)
- [License](#license)
- [Questions](#questions)

## DESCRIPTION
${description}

## INSTALLATION STEPS
${installation}


## USAGE
${usage}

## CONTRIBUTION RULES
${contribution}


## TESTING INSTRUCTIONS
${testing}

## LICENSE
${license}

    
## QUESTIONS
Github Profile: https://github.com/${qQuestions}

Github Repositories: https://github.com/${qQuestions}?tab=repositories

If you have additional questions you can reach me at
    ${email}


    `
}
