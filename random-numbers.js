const array = (n) => {
  let result = [];
  while (result.length < n) {
    for (let i = 0; i < n; i++) {
      let szam = Math.floor(Math.random() * 45 + 1);
      if (szam !== result[i]) {
        result.push(szam);
      }
    }
  }
  return result;
};

console.log(array(6));

module.exports.array = array;
