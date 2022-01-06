const fibonacci = function(n) {
    if(n<0) 
        return 'OOPS'
    if(n<=2)
        return 1;
    let f1=1;
    let f2=1;
    let f3=0;
    for(let i=2; i<n;i++)
    {
        f3= f1+f2;
        f1=f2;
        f2=f3;
    }
    return f3;
    
};

// Do not edit below this line
module.exports = fibonacci;
