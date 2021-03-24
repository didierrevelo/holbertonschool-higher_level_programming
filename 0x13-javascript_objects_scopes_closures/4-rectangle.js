#!/usr/bin/node
// Write a class Rectangle that defines a rectangle
class Rectangle {
  constructor (w, h) {
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      return;
    }
    this.width = w;
    this.height = h;
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
  
  rotate () {
    const change = this.width;
    this.width = this.height;
    this.height = change;
  }
}
module.exports = Rectangle;
