// FIX SVG SYNTAX

class Triangle {
    constructor(color) {
        this.color = color;
      }
      
      render() {
        // if color not correct, throw error

        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
      }
}

class Circle {
    constructor(color) {
        this.color = color;
      }

      render() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
      }
}

class Square {
    constructor(color) {
        this.color = color;
      }

      render() {
        return `<rect x="10" y="10" width = "200" height = "200" fill="${this.color}" />`;
      }
}

module.exports = {
    Triangle,
    Square,
    Circle
};