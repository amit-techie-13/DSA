function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
let start = 0
let end = 0
let temp = 0

  for (let i = 1; i < nums.length; i++) {
    if(nums[i]> currentSum){
        currentSum=nums[i];
        temp=i
    }else{
        currentSum+=nums[i]
    }

    if(currentSum>maxSum){
        maxSum=currentSum;
        start=temp
        end=i
    }
    // currentSum = Math.max(nums[i], currentSum + nums[i]);
    // maxSum = Math.max(maxSum, currentSum);
  }

  return {maxSum,subArray:nums.slice(start,end+1)};
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));