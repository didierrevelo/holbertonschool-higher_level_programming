#!/usr/bin/node
// Write a script that prints the title of a Star
// Wars movie where the episode number matches a given integer.
const request = require('request');
const fs = require('fs');
const data = process.argv;
const url = data[2];

request(url, function (error, response, body) {
  if (error) { console.log(error); }
  fs.writeFile(data[3], body, 'utf-8', (err) => {
    if (err) console.log(err);
  });
});
