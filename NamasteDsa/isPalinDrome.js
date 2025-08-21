function reverse(num){
    let rev=0;
    while(num>0){
        rev = 10*rev+(num%10)
        num=Math.floor(num/10)
    }
    console.log(rev)
    return rev
}

var isPalindrome = function(x) {
    // return x === parseInt(x.toString().split('').reverse().join(''))
    return x === reverse(x)
};


console.log(isPalindrome(-121))