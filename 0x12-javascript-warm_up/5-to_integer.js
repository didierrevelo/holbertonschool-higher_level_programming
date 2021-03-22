#!/usr/bin/node
// Write a script that prints My number if the first argument can be converted to an integer
const number1 = parseInt(process.argv[2]);
if (isNaN(number1)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${number1}`);
}
