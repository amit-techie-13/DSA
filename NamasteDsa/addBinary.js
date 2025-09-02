var mySqrt = function(x) {
    if(x===0||x===1)return x
    let i = 1
    while(i<x){
        if(i*i===x)return i
        if(i*i<x){
            i++
        }else{
            return i-1
        }
    }
    return i-1
};

console.log(mySqrt(2))