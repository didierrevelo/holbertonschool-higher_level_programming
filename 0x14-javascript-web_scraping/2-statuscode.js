#!/usr/bin/node
// Write a script that display the status code of a GET request.
const request = (require('request'));
const data = process.argv;
request(data[2], (err, res, body) => {
  if (err) return console.log('Error: ', err);
  console.log('code: %d\n\n', res.statusCode);
});
