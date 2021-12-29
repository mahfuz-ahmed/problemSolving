function evenify(num) {
  if (num % 2 == 0) {
    console.log(num, ": is even number");
  } else {
    console.log(num * 2, ": is odd number");
  }
}

function evenifyAll(nums) {
  for (let i = 0; i < nums.length; i++) {
    const storeN = nums[i];
    evenify(storeN);
  }
}

var friends = [10, 20, 30, 40, 15];
evenifyAll(friends);

friends_age = [20, 22, 25, 13, 16, 18, 17];
evenifyAll(friends_age);
