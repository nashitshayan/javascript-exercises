let d= new Date();
let currentYear= d.getFullYear();

const findTheOldest = function(ppl) {

    let oldest = ppl.reduce((oldestPerson, currentPerson)=>{
     
      let ageOfCurrentPerson= (currentPerson['yearOfDeath'] || currentYear) - currentPerson['yearOfBirth']
     
     if(ageOfCurrentPerson> oldestPerson.age)
       { oldestPerson.age= ageOfCurrentPerson;
        oldestPerson.name= currentPerson.name}
  
        return oldestPerson;
    }, {name: '', age: 0});

    return oldest;
  }

// Do not edit below this line
module.exports = findTheOldest;
