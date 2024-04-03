const findTheOldest = function(arr) {
    let ascendingByAge = arr.sort((person1, person2) => {
        if (person1.yearOfDeath == undefined) {person1.yearOfDeath = new Date().getFullYear()};
        if (person2.yearOfDeath == undefined) {person2.yearOfDeath = new Date().getFullYear()};
        return  (person1.yearOfDeath - person1.yearOfBirth) - (person2.yearOfDeath - person2.yearOfBirth);
    })

    let oldestPerson = ascendingByAge.pop();
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
