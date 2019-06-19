let colorize = require('./colorize');
let display = require('./display-matrix-with-table-package');
let even = require('./even_odd');
let genmatrix = require('./generateMatrix');
let greater20 = require('./gthen20');
let greater10 = require('./lotto');
let rng = require('./random-numbers');

let arr = rng(6);
for (let i = 0; i < arr.length; i++) {
  let temp = arr[i];
  arr[i] = colorize(temp, arr[i]);
  arr[i] = greater10.szamzarojelbe(temp, arr[i]);
  arr[i] = greater20.greatertherthenTwenty(temp, arr[i]);
  even(temp);
}
let matrix = genmatrix(arr);
console.log(display.tableFunct(matrix));
