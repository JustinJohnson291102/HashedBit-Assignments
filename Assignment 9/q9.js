// Write a function that takes two objects as arguments and merges
//  them into one object using Object.assign(). Return the new object.


// Function to merge two objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2); // Merge obj1 and obj2 into a new object
}

// Test the function
const object1 = { name: "Nikhil", age: 28 };
const object2 = { occupation: "Software Developer", location: "Nowhere" };

console.log(mergeObjects(object1, object2)); 
// Output: { name: "Alice", age: 28, occupation: "Software Developer", location: "New York" }