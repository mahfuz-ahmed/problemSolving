// var n = 79;
// for (var i = 2; i < n; i++) {
//   if (n % i == 0) {
//     console.log("Not Prime");
//     break;
//   }
// }
// console.log("Prime Number");

//Using Function

function isPrime(n) {
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return "Not a Prime Number";
    }
  }
  return "Prime Number";
}

var result = isPrime(127);
console.log(result);
