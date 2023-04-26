const inquirer = require('inquirer');
const SVGmaker = require('./lib/generateSVG.js');

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
    choices: ['Square', 'Triangle', 'Circle'],
  },
  {
    type: 'input',
    message: "What color do you want your shape? Enter a color keyword (OR a hexadecimal number)",
    name: 'shape_color',
  },
];

inquirer.prompt(questions)
  .then((data) => SVGmaker.generateSVG(data))
  .catch((err) => console.log(err))