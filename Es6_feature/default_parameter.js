function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!

// Using with destructuring
function createUser({ name = "Anonymous", age = 0 } = {}) {
  console.log(`Name: ${name}, Age: ${age}`);
}
createUser(); // Name: Anonymous, Age: 0
createUser({ name: "Bob", age: 30 }); // Name: Bob, Age: 30

