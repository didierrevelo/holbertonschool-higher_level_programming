#!/usr/bin/node
// Write a script that prints the number
// of movies where the character “Wedge Antilles” is present.
const request = require('request');
const url = process.argv[2];
let roller = 0;
request(url, function (error, response) {
  if (error) { console.log(error); }
  JSON.parse(response.body).results.forEach(function (result) {
    result.characters.forEach(id => id.includes('18') ? roller++ : roller);
    return roller;
  });
  console.log(roller);
});
