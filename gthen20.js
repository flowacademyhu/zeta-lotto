const greatertherthenTwenty = (szam, str) => {
  if (szam > 20) {
    str = '< ' + str + ' >';
  }

  return str;
};

module.exports = { greatertherthenTwenty }
;
