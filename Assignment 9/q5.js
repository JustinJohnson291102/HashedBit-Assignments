// Write a function that filters out all even numbers from an array of 
// numbers using the filter() method. Return the new array of odd numbers

// Function to filter out even numbers
function filterOdds(arr) {
    return arr.filter(num => num % 2 !== 0); // Keep only odd numbers
}

// Test the function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterOdds(numbers)); // Output: [1, 3, 5, 7, 9]