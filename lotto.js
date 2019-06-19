const szamzarojelbe = (szam) => {
    
    if (szam > 10) {
        szam = ('[' + szam + ']');
    } 

    return szam;
};

console.log(szamzarojelbe(1));
module.exports = {
    szamzarojelbe
};