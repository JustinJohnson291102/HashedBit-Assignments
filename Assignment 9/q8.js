// Given an object with various properties, 
// write a function that returns an array of the object’s keys using Object.keys().



// Function to return the keys of an object
function getObjectKeys(obj) {
    return Object.keys(obj); // Use Object.keys() to get the keys
}

// Test the function
const exampleObject = { name: "Nikhil", age: 28, occupation: "Software Developer" };
console.log(getObjectKeys(exampleObject)); // Output: ["name", "age", "occupation"]