function countDigit(n){
    if(n==0) return 1;
    n=Math.abs(n)
    let count = 0;
    while(n>0){
n=(Math.floor(n/10))
count++
    }
    return count
}

let res =countDigit(459348765)
console.log(res)