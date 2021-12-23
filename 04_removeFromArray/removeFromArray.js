const removeFromArray = function(arr, ...args) {

    for(let i=0; i<args.length; i++)
    {   
        if(arr.includes(args[i]))
        {let index= arr.indexOf(args[i]);
        arr.splice(index,1);}
    }

return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
