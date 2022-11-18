const findTheOldest = function(people) {
	let maxAge = 0, idx = -1;
	people.forEach( (person, i) => {
		let age = (person.yearOfDeath || (new Date()).getFullYear()) - person.yearOfBirth;
		if (age > maxAge) {
			idx = i;
			maxAge = age;
		}
	})
	return people[idx];
};

// Do not edit below this line
module.exports = findTheOldest;
