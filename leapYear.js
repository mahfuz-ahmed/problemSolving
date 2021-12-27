// var leapYear = 2024;

// if (leapYear % 4 == 0) {
//   console.log("This year is leapyear");
// } else {
//   console.log("Not Leapyear");
// }

//Using Function Find LeapYear:

function leapYear(yourYear) {
  if (yourYear % 4 == 0) {
    var isleapYear = "This Year is Leap year";
    return isleapYear;
    // console.log("This year is leap year");
  } else {
    return false;
  }
}

var check = leapYear(2004);
console.log(check);
