#!/usr/bin/node
// Write a function that returns the reversed version of a list
exports.esrever = function (list) {
  const ret = [];
  for (let i = list.length - 1; i > -1; i--) {
    ret.push(list[i]);
  }
  return ret;
};
