// Normal functions in js
function sum(a, b) {
    return a + b;
}
const ans = sum(1, 2);
console.log(ans);

// function for sum 1 to n
function sumToN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum
}
const ans2 = sumToN(100);
console.log(ans2);


// take the input from the user for 1 to n sum
// In Node.js
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (n) {
    n = parseInt(n);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    console.log(`Sum from 1 to ${n} is: ${sum}`);
    rl.close();
});

//


