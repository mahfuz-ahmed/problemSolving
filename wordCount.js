var word = "My name is mahfuz";
var count = 0;
for (var i = 0; i < word.length; i++) {
  var char = word[i];
  if (char == " " && word[i - 1] != " ") {
    count++;
  }
}
count++;
console.log(count);
