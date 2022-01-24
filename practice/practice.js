
// const container = document.querySelector('#container')

// const content= document.createElement('div');
// content.classList.add('content');
// content.textContent= 'This is the glorious text-content';

// container.appendChild(content);

// const redPara= document.createElement('p');
// redPara.textContent= 'Hey I\'m Red';
// redPara.style.color = 'red';
// container.appendChild(redPara)

// const blueHeader= document.createElement('h3');
// blueHeader.textContent= "Hey I'm a Blue Header";
// blueHeader.style.color = 'blue';
// container.appendChild(blueHeader)

// const blackDiv= document.createElement('h3');
// blackDiv.style.border = "solid 1px black";
// blackDiv.style.backgroundColor = 'pink';
// container.appendChild(blackDiv);

// const h1= document.createElement('h1');
// h1.textContent= "I'm in a div";
// blackDiv.appendChild(h1);
// const p= document.createElement('p');
// p.textContent= "ME TOO";
// blackDiv.appendChild(p);


// const btn = document.getElementById('btn');

// btn.onclick = ()=> alert("hello world")

// const btnTwo= document.getElementById("btn-2");

// btnTwo.addEventListener('click', function (e) {
//   (e.target.style.backgroundColor = 'green');
//   });

//   const people = [
    
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
    
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//     {
//       name: "Carly",
//       yearOfBirth: 2018,
//     },
    
//   ]

// let d= new Date();
// let currentYear= d.getFullYear();
//   const findTheOldest = function(ppl) {

//     let oldest = ppl.reduce((oldestPerson, currentPerson)=>{
     
//       let age= (currentPerson['yearOfDeath'] || currentYear) - currentPerson['yearOfBirth']
     
//      if(age> oldestPerson.age)
//        { oldestPerson.age= age;
//         oldestPerson.name= currentPerson.name}
  
//         return oldestPerson;
//     }, {name: '', age: 0});

//     return oldest;
//   }

//   console.log(findTheOldest(people))




//ctor exercise

// function BookMaker(title, author, pages, isRead)
// {
//   this.title= title;
//   this.author= author;
//   this.pages = pages;
//   this.isRead= isRead? 'read' : 'not read yet';
//   this.info = ()=>{
//     return (this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.isRead);
//   }
// }

// const b1= new BookMaker('book', 'author', '300', false);

// console.log(b1.info())



//prototype exercises

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3
// };

// let bed = {
//   sheet: 1,
//   pillow: 2
// };

// let pockets = {
//   money: 2000
// };

// pockets.__proto__= bed;
// bed.__proto__= table;
// table.__proto__= head;
// console.log(pockets.glasses)



//factory function practice

// const personFactory = (name, age)=>{
//   const sayHello = () => console.log(`Hello! ${name}`);
//   return {name, age, sayHello};
// }

// const khan = personFactory('nashit', 23)
// khan.sayHello();



// const Person =(name) =>{
//   const sayMyName= ()=> console.log(`My name is ${name}`);
//   const sunnahSupremacy = () => console.log(`Let the sunnah for forth!`);
//   return {sayMyName, sunnahSupremacy};
// }

// // const Akh = (name)=>{
// //   const {sayMyName}= Person(name);
// //   const akhTing = ()=> console.log(`Akh got a nice beard! `);
// //   return {sayMyName, akhTing};
// // }

// const Akh = (name)=>{
//   const prototype = Person(name);
//   console.dir(prototype)
//   const akhTing = ()=> console.log(`Akh got a nice beard! `);
//   return Object.assign({}, prototype,{akhTing});
// }
// const akh1 = Akh('Hamoody');
// // console.dir(akh1)
// // akh1.sayMyName();
// // akh1.akhTing();


