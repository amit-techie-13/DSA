//Given a sorted array of n integers where all elements appear twice except one element that
//  appears once, find that single element.
//🧠 Constraints:
//Time: O(log n)

//Space: O(1)

function findUnique(arr){
let start = 0
let end = arr.length-1


while(start<end){
    let mid = Math.floor((start+end)/2)
    if(mid%2 ===1) mid --
    if(arr[mid] === arr[mid+1]){
        start = mid+2
    }else{
        end = mid
    }
}
return arr[start]
}


console.log("🚀 ~ findUnique([1, 1, 2, 2, 3, 4, 4]):", findUnique([1, 1, 2, 2, 3, 4, 4]))
