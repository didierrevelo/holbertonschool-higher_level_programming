#!/usr/bin/node
// Write a script that searches the second biggest integer in the list of arguments.
const val = process.argv;
if (val.length <= 3) {
  console.log('0');
} else {
  val.sort(function (a, b) {
    return a - b;
  });
  const arrVal = val.slice(val.length - 2);
  console.log(arrVal[0]);
}
