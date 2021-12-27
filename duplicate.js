var name = [3, 5, 4, 5, 2, 1, 2, 9, 3, 4, 7, 5];
var uniqueName = [];
for (var i = 0; i < name.length; i++) {
  var element = name[i];
  var index = uniqueName.indexOf(element);
  if (index == -1) {
    uniqueName.push(element);
    console.log(element);
  }
}
