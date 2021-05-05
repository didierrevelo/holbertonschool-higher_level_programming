#!/usr/bin/node
// Write a script that writes a string to a file.
const fs = require('fs');

const data = process.argv;

fs.writeFile(data[2], data[3], (err) => {
  if (err) console.log(err);
});
