var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1
    let mid = 0
    while(left<=right){
        mid = (Math.floor((left+right)/2))
        console.log("🚀 ~ searchInsert ~ mid:", mid)
        if(nums[mid] === target) return mid
        if(nums[mid]<target){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return right <0 ? right + 1 : left> right? mid: mid+1
    
};

console.log(searchInsert([1,3],2))