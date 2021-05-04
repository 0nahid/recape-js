// var fibo = [0, 1];
// // fibonacci[2] = fibonacci[2 - 1] + fibonacci[2 - 2]
// // fibonacci[n] = fibonacci[n - 1] + fibonacci[n - 2]
// function fibonacci(n) {
//     for (var i = 2; i <= n; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// var result = fibonacci(12);
// console.log(result);

var fibo = [0, 1];

function fibonacci(n) {
    for (i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var result = fibonacci(15);
console.log(result);