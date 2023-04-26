const shapes = require('./shapes.js');

describe('Shapes', () => {

    describe('Triangle test', () => {
        it('should ', () => {

            const newTriangle = new shapes.Triangle();
            newTriangle.color("blue");
            expect(newTriangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

        });
    });
});