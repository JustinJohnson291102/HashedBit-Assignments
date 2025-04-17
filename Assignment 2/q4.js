let n1 = 123;
let n2 = 123;
let ans = 0;
function f1 (n1, n2){
while(n1 !== 0 || n2 !==0){
let d1 = Math.floor(n1%10);
let d2 = Math.floor(n2%10);
n1 = n1/10;
n2 = n2/10;
ans = ans +(d1*d2)}
return ans;
}

let ans2 = f1(n1,n2)
console.log(ans2);