// Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
    },
    {
    type: 'list',
    message: 'Select a shape for your logo.',
    choices: ["circle", "triangle", "square"],
    name: 'shape',
    default: "circle"
    },
    {
    type: 'input',
    message: 'Enter a color (or hexadecimal number) for the shape selected.',
    name: 'shapeColor',
    default: "no fill"
    }
    ])
    .then((answers) => {
        const svgContent = renderSVG(answers);
    
        fs.writeFile('logo.svg', svgContent, (err) =>
        err ? console.log(err) : console.log('Successfully created logo.svg!')
        );
    })
    .catch((error) => {
        if (error) {
        console.log(error)
    }});
}

questions();
