function powerOfThree(n){
    if (n === 1) return true;
    if(n<1) return false
    return powerOfThree(n/3)
}

console.log(powerOfThree(19))