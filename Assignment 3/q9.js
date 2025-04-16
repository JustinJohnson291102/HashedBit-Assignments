// Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    return paragraph.split(' ').length;
}

let paragraph = 'This is a paragraph with some words';
let wordCount = countWords(paragraph);

console.log("Word count: ", wordCount);
console.log("");