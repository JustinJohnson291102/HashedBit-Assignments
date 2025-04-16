
// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

let num = 456;

function sum(num){
    while(num > 9){
 num = num.toString().split("").map(Number).reduce((acc, Item) => acc + Item);
}
    
return num;
}

let repeatedsum = sum(num);
console.log(repeatedsum);
