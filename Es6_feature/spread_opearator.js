// Copying an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Creates a new array with the same elements
console.log(arr2); // [1, 2, 3]

// Combining arrays
const arr3 = [4, 5, 6];
const combined = [...arr1, ...arr3];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copying an object
const obj1 = { name: "Alice", age: 25 };
const obj2 = { ...obj1 }; // Creates a new object with the same properties
console.log(obj2); // { name: "Alice", age: 25 }

// Combining objects
const obj3 = { city: "New York" };
const merged = { ...obj1, ...obj3 };
console.log(merged); // { name: "Alice", age: 25, city: "New York" }

// Passing array elements as function arguments
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3,4];
console.log(sum(...numbers)); // 6