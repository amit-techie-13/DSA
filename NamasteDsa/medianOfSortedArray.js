/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let n = nums1.length
    let m = nums2.length
    let x = n-1;
    let y = m-1;
    let arr = [];
    let median = 0;
    let mid = 0;
    for (let i = m + n - 1; i >= 0; i--) {
        if (y < 0) {
            arr[i] = nums1[x]
            x--
            continue
        }
        if (x < 0) {
            arr[i] = nums2[y]
            y--
            continue
        }
         if (nums1[x ] > nums2[y ]) {
            console.log('first',i)
            arr[i] = nums1[x ]
            x--
        } else {
            arr[i] = nums2[y ]
            y--
        }
    }
    if (arr.length % 2 === 0) {
        mid = Math.floor((0 + arr.length - 1) / 2)
        console.log(mid)
        median = (arr[mid] + arr[mid + 1]) / 2

    } else {
        mid = Math.floor((0 + arr.length - 1) / 2)
        console.log('mid', mid)
        median = arr[mid]
    }
    console.log(arr)
    return median
};

console.log(findMedianSortedArrays([1, 3], [2]))