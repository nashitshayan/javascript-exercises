const ftoc = function(tempFarhen) {
  return Number(((tempFarhen-32)*(5/9)).toPrecision(3));
};

const ctof = function(tempCel) {
  let tempFarhen= (tempCel*(9/5))+ 32;

  let intPart= Math.floor(tempFarhen);

  let numOfDigits= 0;
    while(intPart>0)
    {
      numOfDigits++;
      intPart=Math.floor(intPart/10);
    }

  return Number(tempFarhen.toPrecision(numOfDigits+1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
