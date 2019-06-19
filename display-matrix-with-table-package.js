const tableFunct = (arr) => {
  let table = require('table');
  let out = table.table(arr);
  return out;
};

module.exports = {
  tableFunct
};
