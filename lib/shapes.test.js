const shapes = require('./shapes.js');

describe('Shapes', () => {

    describe('Triangle test', () => {
        it('should render a blue triangle', () => {

            const newTriangle = new shapes.Triangle("blue");

            expect(newTriangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

        });
    });
    describe('Triangle invalid color test', () => {
        it('should throw an error for invalid color', () => {

            const testFunction = () => {
                const newTriangle = new shapes.Triangle("hahahaha");
            }

            expect(testFunction).toThrow();

        });
    });
    describe('Circle test', () => {
        it('should render a red circle', () => {

            const newCircle = new shapes.Circle("red");

            expect(newCircle.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red" />');

        });
    });
    describe('Square test', () => {
        it('should render a yellow square', () => {

            const newSquare = new shapes.Square("yellow");

            expect(newSquare.render()).toEqual('<rect x="10" y="10" width = "200" height = "200" fill="yellow" />');

        });
    });
    describe('Square Hex color test', () => {
        it('should render a square with a yellow hex of #FFC300', () => {

            const newSquare = new shapes.Square("#FFC300");

            expect(newSquare.render()).toEqual('<rect x="10" y="10" width = "200" height = "200" fill="#ffc300" />');

        });
    });
});