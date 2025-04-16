// Create an object called person with properties for name, age, and occupation.
//  Write a function that logs a greeting message using these properties.


// Create an object with properties for name, age, and occupation
const person = {
    name: "Nikhil",
    age: 28,
    occupation: "Software Developer"
};

// Function to log a greeting message
function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}. I am ${obj.age} years old, and I work as a ${obj.occupation}.`);
}

// Test the function
greetPerson(person);