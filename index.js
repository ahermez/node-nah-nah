// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
// const questions = ["project-name",
// "project-description",
//  "table-of-contents",
//   "installation","usage", "license", "contribution", "tests"]
// const licenseOptions = ["ISC", "MIT", "CC"]
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your application",

    },
    {
        type: "input",
        name: "github",
        message: "enter you github user name",

    },
    {
        type: "input",
        name: "email",
        message: "what is your email address?",

    },
    {
        type: "input",
        name: "description",
        message: "describe this application",

    },
    {
        type: "input",
        name: "installation",
        message: "are there any npm packages?",

    },
    {
        type: "input",
        name: "test",
        message: "are there any testing frameworks?",

    },
    {
        type: "input",
        name: "usage",
        message: "how is this application used?",

    },
    {
        type: "input",
        name: "contributing",
        message: "are there any contributors to the application?",
        
    },
    {
        type: "list",
        name: "license",
        message: "what license would you like?",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']  
     },
]
    
    // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data) 
}

// TODO: Create a function to initialize app
async function init() {
    // const answer = await input({ message: 'Enter your name' });
inquirer.prompt(questions).then((answer)=>{
    console.log("generate readme");
    writeToFile("README.md", generateMarkdown({...answer}))
})
}

// Function call to initialize app
init();



// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under



