// foor loop factorial

var factorial = 1;
for (i = 1; i <= 10; i++) {
  var factorial = factorial * i;
  console.log(i, factorial);
}

//Function factorial loop

function factorialFunc(number) {
  var factorial = 1;
  for (i = 1; i <= number; i++) {
    var factorial = factorial * i;
    // console.log(i, factorial);
  }
  return factorial;
}

var factorialResult = factorialFunc(10);
console.log("function factorial=" + factorialResult);

// While loop for Factorial

var i = 1;
var factorialstore = 1;

while (i <= 10) {
  factorialstore = factorialstore * i;
  console.log(factorialstore);
  i++;
}
