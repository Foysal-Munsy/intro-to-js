const readline = require("readline-sync");
function rem(a){
    let ans = a%5;
    return ans;
}
let a = parseInt(readline.question("enter your number: "));
console.log(rem(a));