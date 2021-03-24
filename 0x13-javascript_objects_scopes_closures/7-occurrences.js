#!/usr/bin/node
// Write a function that returns the number of occurrences in a list
/* const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);*/
exports.nbOccurences = function (list, searchElement) {
  const count = list.reduce((a, v) => (v === searchElement ? a + 1 : a), 0);
  return count;
};
