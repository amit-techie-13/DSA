/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
//     let x =0;
//     for(let i=0;i<nums.length;i++){
// if(nums[i]!==val){
//     nums[x] = nums[i];
//     x=x+1
// }
//     }
//     return x

let n = nums.length;
let count = 0;
for(let i=0;i<n;i++){
    if(nums[i] === val){
        count++
    }
}
return n-count
};

console.log(removeElement([3,2,2,3],3))