#!/usr/bin/node
// Write a script that reads and prints the content of a file.
const argument = process.argv;
const fs = require('fs');
fs.readFile(argument[2], 'utf-8', (err, data) => {
  if (err) { console.log(err); }
  console.log(data);
});
