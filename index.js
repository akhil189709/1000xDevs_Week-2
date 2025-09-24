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


