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

// The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. 
// While not a requirement, it is recommended that you place any common functionality and 
// properties shared by the Triangle, Circle, and Square classes in a parent Shape class 
// and use inheritance to reuse the code in the child classes.

// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

// The following example test should pass:

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
// You may need to add additional files in the lib folder for handling user input, 
// writing to a file, etc. Writing tests for these additional files is optional.