const greatertherthenTwenty = (szam) => {
  if (szam > 20) {
    szam = '< ' + szam + ' >';
  }

  return szam;
};
let szam = 5;
console.log(greatertherthenTwenty(szam));

module.exports = { greatertherthenTwenty }
;
