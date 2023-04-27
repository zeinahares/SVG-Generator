const shapes = require('./shapes.js');
const fs = require('fs');

function generateSVG(data) {


    // if text >= 3, throw error
    if (data.letters.length > 3) {
        throw new Error("Please enter 3 letters or less");
    }

    const lowercase_color = data.letters_color.toLowerCase();
    const colorsArray = shapes.colorsArray;

    // if color not correct, throw error
    if (!lowercase_color.includes("#") && !colorsArray.includes(lowercase_color)) {

        throw new Error("Please enter a valid color");
    }

    // generate svg height and width
    const starter_string = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    let shape_SVGString;
    let text_SVGString;

    // generate shape SVG from shapes classes
    // generate text size according to shape
    if (data.shape === "Triangle") {

        const triangle_Obj = new shapes.Triangle(data.shape_color);

        shape_SVGString = triangle_Obj.render();

        text_SVGString = `<text x="150" y="160" font-size="70" text-anchor="middle" fill="${lowercase_color}">`;

    } else if (data.shape === "Circle") {

        const circle_Obj = new shapes.Circle(data.shape_color);

        shape_SVGString = circle_Obj.render();

        text_SVGString = `<text x="150" y="135" font-size="100" text-anchor="middle" fill="${lowercase_color}">`;

    } else if (data.shape === "Square") {

        const sqaure_Obj = new shapes.Square(data.shape_color);

        shape_SVGString = sqaure_Obj.render();

        text_SVGString = `<text x="110" y="140" font-size="100" text-anchor="middle" fill="${lowercase_color}">`;
    }

    // string them together and send to another function to create file

    const svgString = `${starter_string}${shape_SVGString}${text_SVGString}${data.letters}</text></svg>`;

    writeToFile(svgString);

}


// function to write svg file

function writeToFile(svgString) {

    fs.writeFile("logo.svg", svgString, (err) =>
        err ? console.log(err) : console.log("Generated logo.svg")
    );
}

module.exports = { generateSVG };