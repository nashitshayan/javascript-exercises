const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(arr) {
	let sum = arr.reduce((sum,curr)=>{
    sum+=curr;
    return sum;
  }, 0);
  return sum;
};

const multiply = function(arr) {
  let prod = arr.reduce((prod,curr)=>{
      prod*=curr;
      return prod;
  }, 1);
  return prod;
};

const power = function(a,b) {
    let res=1;
    for(let i=0; i<b;i++)
      res*=a;

    return res;
};

const factorial = function(n) {
	if(n<=1)
    return 1;
  else
    return n* factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
