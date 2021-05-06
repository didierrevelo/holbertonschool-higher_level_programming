#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  }
  const dictionary = {};
  for (const userd of JSON.parse(body)) {
    if (userd.completed) {
      if (dictionary[userd.userId]) {
        dictionary[userd.userId]++;
      } else {
        dictionary[userd.userId] = 1;
      }
    }
  }
  console.log(dictionary);
});
