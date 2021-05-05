#!/usr/bin/node
// Write a script that prints the title of a Star
// Wars movie where the episode number matches a given integer.
const request = require('request');
const data = process.argv[2];

const url = `https://swapi-api.hbtn.io/api/films/${data}`;
request(url, function (error, response) {
  if (error) { console.log(error); }
  console.log(JSON.parse(response.body).title);
});
