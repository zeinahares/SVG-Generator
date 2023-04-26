// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const inquirer = require('inquirer');
const generateSVG = require('./lib/generateSVG.js');

const questions = [
    {
        type: 'input',
        message: "What text would you like in your SVG? (up to 3 letters)",
        name: 'letters',
      },
    {
        type: 'input',
        message: "What color do you want your text? Enter a color keyword (OR a hexadecimal number)",
        name: 'letters_color',
      },
      {
        type: 'list',
        message: "Choose your shape.",
        name: 'shape',
        choices: ['Square','Triangle','Circle'],
      },
      {
        type: 'input',
        message: "What color do you want your shape? Enter a color keyword (OR a hexadecimal number)",
        name: 'shape_color',
      },
];

inquirer.prompt(questions)
        .then((data) => generateSVG(data))
        .catch((err) => console.log(err))