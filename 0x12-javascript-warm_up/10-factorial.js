#!/usr/bin/node
// Write a script that computes and prints a factorial
const n = parseInt(process.argv[2]);
function factorializerecur (n) {
  if (!(n)) {
    return 1;
  } else {
    return n * factorializerecur(n - 1);
  }
} console.log(factorializerecur(n));
