let a = 2
let operator = '+'
let b= 3

function calculate (a,operator,b){
switch(operator){
    case '+': console.log(a+b)
    break;
    case '-': console.log(a-b);
    break;
    case '*': console.log(a*b);
    break;
    case '/': console.log(a/b);
    break;  
}
}
calculate(a,operator,b);