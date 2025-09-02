function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;   // simple increment
            return digits;    // done
        }
        digits[i] = 0;        // set current to 0 and carry over
    }
    // If all digits were 9
    digits.unshift(1);       // add 1 at the beginning
    return digits;
}

// Examples
console.log(plusOne([1,2,3])); // [1,2,4]
console.log(plusOne([9,9,9])); // [1,0,0,0]

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))