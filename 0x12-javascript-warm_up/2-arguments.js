#!/usr/bin/node
// Write a script that prints a message
const arguments = process.argv.length;
if (arguments === 2) {
    console.log('No argument');
} else if (arguments === 3) {
    console.log('Argument found');
} else {
    console.log('Arguments found');
}
