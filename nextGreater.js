// function isPrime(num1,num2){
// let start = num1;
// let end = num2;
// let primes = ""

// for (let num = start; num <= end; num++) {
//     let isPrime = true;
//     let divisor = 2;

//     while (divisor <= Math.sqrt(num)) {
//         if (num % divisor === 0) {
//             isPrime = false;
//             break; // no need to check further
//         }
//         divisor++;
//     }

//     if (isPrime && num > 1) {
//         primes+=num + " "
//     }
// }
// console.log(primes)
// }

function nextGreater(nums) {
    console.log("🚀 ~ nextGreater ~ nums:", nums)
    let stack = [], res = Array(nums.length).fill(-1);
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            res[stack.pop()] = nums[i];
        }
        stack.push(nums[i]);
    }
    return res;
}
console.log(nextGreater([6,8,0,4,7]))

// isPrime(2,15)
// var result = [1,2,3,4,5];
// result[15] = 119
// console.log(result)
// result =5
// console.log(Math.sqrt(2))