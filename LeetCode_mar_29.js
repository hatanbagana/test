// var removeElement = function (nums, val) {
//   console.log("nums = " + nums);
//   let filter = [];
//   let val1 = 0;
//   filter = nums.filter((element) => {
//     if (element !== val) {
//       console.log("inside array = " + element);
//       return true;
//     }
//     val1++;
//     return false;
//   });
//   //   console.log("val1 = " + val1);
//   console.log("filter = " + filter);
//   return filter;
// };

// console.log("result " + removeElement([1, 2, 3, 4, 1], 1));

var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  console.log(k);
  return k;
};

console.log(removeElement([1, 2, 3, 4, 1], 1));
