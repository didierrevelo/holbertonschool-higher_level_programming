#!/usr/bin/node
// Write a script that display the status code of a GET request.
const request = require('request');
const data = process.argv;

request.get(data[2]).on('response', function (response) {
  console.log('code:', response.statusCode);
});
