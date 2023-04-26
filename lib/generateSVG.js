const shapes = require('./shapes.js');

function generateSVG (data) {

    // generate text
    // generate svg height and width

    // generate shape SVG from shapes classes
    if (data.shape === "Triangle") {

        const triangle_Obj = new shapes.Triangle(data.shape_color);

        const shape_SVGString = triangle_Obj.render();

    } else if (data.shape === "Circle") {

        const circle_Obj = new shapes.Circle(data.shape_color);

        const shape_SVGString = circle_Obj.render();

    } else if (data.shape === "Square") {

        const sqaure_Obj = new shapes.Square(data.shape_color);

        const shape_SVGString = sqaure_Obj.render();
    }


    // string them together and send to another function to create file


    console.log("Generated logo.svg");
}


// function to write svg file

module.exports = { generateSVG };