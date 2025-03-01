// Array Destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Skipping elements
const [x, , z] = numbers;
console.log(x); // 1
console.log(z); // 3

// Object Destructuring
const person = { name: "Alice", age: 25, city: "New York" };
const { name, age } = person;
console.log(name); // Alice
console.log(age); // 25

// Renaming variables
const { name: personName, age: personAge } = person;
console.log(personName); // Alice
console.log(personAge); // 25

// Default values
const { country = "USA" } = person;
console.log(country); // USA (default value since `country` doesn't exist in `person`)

// Nested Destructuring
const user = {
  id: 1,
  name: "John",
  address: {
    city: "San Francisco",
    zip: "94107",
  },
};
const {
  name: userName,
  address: { city: userCity },
} = user;
console.log(userName); // John
console.log(userCity); // San Francisco