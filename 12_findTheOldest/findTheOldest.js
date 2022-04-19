let d = new Date();
let currentYear = d.getFullYear();

// const findTheOldest = function (ppl) {
// 	let oldest = ppl.reduce(
// 		(oldestPerson, currentPerson) => {
// 			let ageOfCurrentPerson =
// 				(currentPerson['yearOfDeath'] || currentYear) -
// 				currentPerson['yearOfBirth'];

// 			if (ageOfCurrentPerson > oldestPerson.age) {
// 				oldestPerson.age = ageOfCurrentPerson;
// 				oldestPerson.name = currentPerson.name;
// 			}

// 			return oldestPerson;
// 		},
// 		{ name: '', age: 0 },
// 	);

// 	return oldest;
// };

const findTheOldest = function (object) {
	let objAge = {};
	let arrAge = [];
	let older;
	let result = 0;
	object.map((person) => {
		const { name } = person;
		const { yearOfBirth } = person;
		const { yearOfDeath } = person;
		arrAge.push(yearOfDeath - yearOfBirth);
		objAge[name] = yearOfDeath - yearOfBirth;

		older = Math.max(...arrAge);
	});
	for (const key in objAge) {
		if (objAge[key] === older) {
			result = objAge[key];
		}
	}
	return result;
};
// Do not edit below this line
module.exports = findTheOldest;
