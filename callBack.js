function explain_callBack(name, age, task) {
  console.log("hello", name);
  console.log("your age", age);
  task();
}

function washHand() {
  console.log("wash hand with soap");
}

function takeShower() {
  console.log("Take Shower");
}
function scrollFacebook() {
  console.log("Every Time Scrolling Facebook page");
}

explain_callBack("mahfuz ", 18, washHand);
explain_callBack("Ahmed", 28, takeShower);
explain_callBack("kobir", 35, scrollFacebook);
