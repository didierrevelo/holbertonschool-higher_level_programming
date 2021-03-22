#!/usr/bin/node
// Write a script that prints the first argument
const arguments = process.argv[2];
if (arguments === undefined) {
  console.log('No argument');
}
else {
  console.log(arguments);
}