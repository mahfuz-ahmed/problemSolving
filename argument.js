function addNumbers(num1, num2) {
  for (let i = 0; i < arguments.length; i++) {
    const num = arguments[i];
    console.log(num);
  }
  return num1 + num2;
}
var result = addNumbers(3, 5, 8, 45, 12, 6);
console.log(result);
