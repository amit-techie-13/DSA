//palindrome means if read from start or end the result is same, 
// eg 121,222,12321,etc

const isPalindrome = (numb)=>{

    return numb < 0 ? false : numb === parseInt(numb.toString().split('').reverse().join(''))
}

console.log(isPalindrome(12321))

const isPalindromeStr = (str)=>{

    return  str === (str.split('').reverse().join(''))
}

console.log(isPalindromeStr('aba'))