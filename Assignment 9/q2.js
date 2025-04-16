// Create an array called fruits that contains five different fruit names. 
// Write a function that returns the second fruit in the array.


// Create an array of fruits
const fruits = ["Apple", "Banana", "Cherry", "Date", "berry"];

// Function to return the second fruit in the array
function getSecondFruit(arr) {
    return arr[1]; // Access the second element (index 1)
}

// Test the function
console.log(getSecondFruit(fruits)); // Output: "Banana"