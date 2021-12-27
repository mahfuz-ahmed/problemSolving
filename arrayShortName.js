//Please Check This

var name = ["a", "mahfuz", "z", "alam", "jakir", "sorif", "mahfuahmed"];
var sortName = name[0];

for (var i = 0; i < name.length; i++) {
  var element = name[i];
  if (element.length < sortName.length) {
    sortName = element;
  }
}
console.log(sortName);
// console.log(name[0].length);
