const colorize = (num, str) => {
  if (num % 2 === 0) {
    return ('\x1b[32m' + str + '\x1b[0m');
  } else {
    return ('\x1b[31m' + str + '\x1b[0m');
  }
};

module.exports = colorize;
