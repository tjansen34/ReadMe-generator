// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')


function generateMarkdown(data) {
    // Your implementation for generating the README content
  }
  
  // Export the generateMarkdown function
  module.exports = generateMarkdown;
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Give a brief project description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Who is the author of this project?',
    name: 'author',
  },
  {
    type: 'input',
    message: 'Provide links or URLs related to the project:',
    name: 'links',
  },
  {
    type: 'input',
    message: 'What are the contribution guidelines?',
    name: 'contribution',
  },
  {
    type: 'list',
  message: 'Choose a license for your project:',
  name: 'license',
  choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'Other'],
  },   
];

inquirer
  .prompt(questions)
  .then((answers) => {
    // Here, you can use the 'answers' object to generate your README content.
    // For example, create a README.md file with the provided information.
    console.log('User responses:', answers);

    const readmeContent = `# ${answers.title}\n\n${answers.description}\n\nAuthor: ${answers.author}\n\nProject Link: ${answers.links}\n\nContribution Guidelines: ${answers.contribution}\n`;

    // Write the README content to a file
    fs.writeFileSync('README.md', readmeContent);

    console.log('README.md generated successfully!');
  });

// update questions look up inquirer documentation



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        console.log('User responses:', answers);
  
        const readmeContent = generateMarkdown(answers);
  
        fs.writeFileSync('README.md', readmeContent);
  
        console.log('README.md generated successfully!');
      });
  }

// Function call to initialize app
init();
