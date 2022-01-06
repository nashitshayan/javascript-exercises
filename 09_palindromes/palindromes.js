const palindromes = function (str) {
    let strAft = str.toLowerCase().split(/[!.,\s"';:/{}[\]?<>]/).join('');
    let strRev = strAft.split('').reverse().join(''); 

    return strAft===strRev;
  
};

// Do not edit below this line
module.exports = palindromes;
