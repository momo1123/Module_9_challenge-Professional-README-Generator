// ## Acceptance Criteria

// ```md
// GIVEN a command-line application that accepts user input - DONE
// WHEN I am prompted for information about my application repository - Done
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions- Done
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// Using the node packages 
const fs = require('fs'); // Used to create files locally
const inquirer = require('inquirer'); // Used for user interactions
// TODO: Include packages needed for this application


// TODO: Create an array of questions for user input

const questions = [{
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
];
// Create function that creates Title,Description,etc in the Readme with title font
inquirer
    .prompt(questions)
    .then((answers) => {
    const html = getHtml(answers);
    fs.writeFile('README_TESTING',html,(err) =>{
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
    const {name, description, installation, usage, contribution, testing} = answers;
    // The return statement here returns the output as given in the Template Literal 
    return`
    
    # **TILE:${name}**

    # DESCRIPTION:${description}


    # INSTALLATION STEPS:${installation}


    # USAGE:${usage}

    # CONTRIBUTION RULES:${contribution}


    # TESTING INSTRUCTIONS:${testing}

    # LICENSE:
    
    # QUESTIONS:

    Table of Contents

    `
}
// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();
