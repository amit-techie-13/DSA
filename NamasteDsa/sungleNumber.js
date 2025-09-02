// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function(nums) {
//     let map ={}
//     for(let i =0;i<nums.length;i++){
//         map[nums[i]] = (map[nums[i]] || 0)+1
//     }
//     for(keys in map){
//         if(map[keys] === 1){
//             return parseInt(keys)
//         }
//     }
// };

// console.log(singleNumber([4,1,2,1,2,3,3]))

function shuffle(array) {
    // Your implementation
   let newArray = array.slice()
   for(let i=0;i<newArray.length;i++){
     const j = Math.floor(Math.random() * (i));
    [newArray[i],newArray[j]] = [newArray[j],newArray[i]] 
   }
return newArray
}

//For the purpose of user debugging.
console.log(shuffle([1, 2, 3, 4, 5]));