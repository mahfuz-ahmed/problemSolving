var number = [10, 20, 100, 20, 35, 91, 200];
var max = number[0];
for (var i = 1; i < number.length; i++) {
  var arryElement = number[i];
  if (arryElement > max) {
    max = arryElement;
  }
}
console.log("max number is:", max);
