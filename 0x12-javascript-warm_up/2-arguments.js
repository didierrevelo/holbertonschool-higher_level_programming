#!/usr/bin/node
//  Write a script that prints a message
const argument = process.argv.length;
if (argument === 2) {
  console.log('No argument');
} else if (argument === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
