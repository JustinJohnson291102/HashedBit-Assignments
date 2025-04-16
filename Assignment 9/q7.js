// Write a function that takes an object with properties width and
//  height and returns the area of a rectangle (width * height).



// Function to calculate the area of a rectangle
function calculateRectangleArea(rect) {
    return rect.width * rect.height;
}

// Test the function
const rectangle = { width: 10,
                     height: 5 };
console.log(calculateRectangleArea(rectangle)); // Output: 50