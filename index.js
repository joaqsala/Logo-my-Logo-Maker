// Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {renderSVG} = require('./lib/shapes.js');

// function valColor(color) {
//     const colorRegex = /^([a-z]+|\#[0-9a-f]{3,6})$/;
//     if (!colorRegex.test(color)) {
//         throw new Error('Invalid color entered. Please try again.');
//     } 
//     return true;
//     }


const questions = () => {
    return inquirer.prompt([
    {
    type: 'input',
    message: 'Enter text for your logo (max 3-characters).',
    name: 'textLogo',
    validate: textInput =>{
        if (textInput && textInput.length <= 3){
            return true
        } else {
            console.log("  Text can be at most 3 characters.")
            return false
        };
    }
    },
    {
    type: 'input',
    message: 'Enter a color (or hexadecimal number) for the text of your logo.',
    name: 'textColor',
    default: 'white',
    },
    {
    type: 'list',
    message: 'Select a shape for your logo.',
    choices: ["circle", "triangle", "square"],
    name: 'logoShape',
    default: "circle"
    },
    {
    type: 'input',
    message: 'Enter a color (or hexadecimal number) for the shape selected.',
    name: 'shapeColor',
    default: "black",
    }
    ])
    .then((answers) => {
        console.log(answers)
        const svgContent = renderSVG(answers);
    
        fs.writeFile('./examples/logo.svg', svgContent, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg!')
        );
    })
    .catch((error) => {
        if (error) {
        console.log(error)
    }});
}


questions();
