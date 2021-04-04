#!/usr/bin/node
// Write a class Square that defines a square and inherits from Square of 5-square.js
const square = require('./5-square.js');

class Square extends square {
  charPrint (c) {
    if (!c) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}
module.exports = Square;
