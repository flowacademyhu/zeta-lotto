const colorize = (num) => {
  if (num % 2 === 0) {
    return ('\x1b[32m' + num + '\x1b[0m');
  } else {
    return ('\x1b[31m' + num + '\x1b[0m');
  }
};

console.log(colorize(6));
console.log(colorize(5));

module.exports = colorize;
