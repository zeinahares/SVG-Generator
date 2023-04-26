// FIX SVG SYNTAX

class Triangle {
    constructor(color) {
        this.color = color;
      }
      
      render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
      }
}

class Circle {
    constructor(color) {
        this.color = color;
      }

      render() {
        return `svg syntax ${this.color}`;
      }
}

class Square {
    constructor(color) {
        this.color = color;
      }

      render() {
        return `svg syntax ${this.color}`;
      }
}

module.exports = {
    Triangle,
    Square,
    Circle
};