var w = 4;
var o = 5;
var empty = 0;

console.log("w=", w, "o=", o);

empty = w;
w = o;
o = empty;
console.log("w=", w, "o=", o);

var x = 6;
var y = 9;

[x, y] = [y, x];

console.log("x=", x, "y=", y);
