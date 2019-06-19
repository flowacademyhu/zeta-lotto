const szamzarojelbe = (szam, str) => {
  if (szam > 10) {
    str = ('[' + str + ']');
  }

  return str;
};

module.exports = {
  szamzarojelbe
};
