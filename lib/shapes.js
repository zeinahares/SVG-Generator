const colorsArray = [
  'blue',
  'red',
  'green',
  'yellow',
  'aqua',
  'aquamarine',
  'indigo',
  'forestgreen',
  'fuchsia',
  'gold',
  'gray',
  'grey',
  'green',
  'greenyellow',
  'hotpink',
  'lime',
  'magenta',
  'maroon',
  'pink',
  'brown',
  'black',
  'white',
  'darkblue',
]

class Shape {
  constructor(color) {
    const lowercase = color.toLowerCase();
    // if color not correct, throw error
    if (!lowercase.includes("#") && !colorsArray.includes(lowercase)) {
      throw new Error("Please enter a valid color");
    }

    this.fill_color = lowercase;
  }
}


class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fill_color}" />`;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.fill_color}" />`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<rect x="10" y="10" width = "200" height = "200" fill="${this.fill_color}" />`;
  }
}

module.exports = {
  Triangle,
  Square,
  Circle,
  colorsArray,
};