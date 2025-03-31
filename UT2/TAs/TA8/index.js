const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
  {
    name: "George",
    yearOfBirth: 1993,
    yearOfDeath: NaN,
  },
  {
    name: "Ringo",
    yearOfBirth: 1945,
    yearOfDeath: 2014,
  },
  {
    name: "Paul",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "John",
    yearOfBirth: 1940,
    yearOfDeath: 1980
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  }
]

function findTheOldest(arr) {
  let oldest = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(arr[i].yearOfBirth, arr[i].yearOfDeath);

    if (currentAge > oldestAge) {
      oldest = arr[i];
    }
  }

  return oldest;
}

function getAge(yearOfBirth, yearOfDeath) {
  const currentYear = new Date().getFullYear();
  return (yearOfDeath || currentYear) - yearOfBirth;
}

oldest = findTheOldest(people);
console.log("Oldest: ", oldest, "Age: ", getAge(oldest.yearOfBirth, oldest.yearOfDeath)); // Output: { name: 'Jane', yearOfBirth: 1912, yearOfDeath: 1941 }