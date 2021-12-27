//iterative way

var fibo = [0, 1];

for (var i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];

  console.log(fibo[i], fibo[i - 1], fibo[i - 2]);
}
console.log(fibo);

//Recarsive way

function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

var result = fibonacci(15);
console.log(result);
