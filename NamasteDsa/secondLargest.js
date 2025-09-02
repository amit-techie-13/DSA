function secondLargest(arr) {
  if (arr.length < 2) return arr[0]; // edge case

  let max = -Infinity;
  let secondMax = -Infinity;
   
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (val > max) {
      secondMax = max;
      max = val;
    } else if (val > secondMax && val < max) {
      secondMax = val;
    }
  }

  return secondMax ;
}
console.log(secondLargest([2, 4, 5, 3, 7, 89, 77])); // 77
console.log(secondLargest([5, 5, 5]));              // null
console.log(secondLargest([-10, -3, -20]));         // -10
console.log(secondLargest([1])); 