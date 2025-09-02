
function SUmOfNumber(arr){
    let n = arr.length + 1
    let expectedSum = (n*(n+1)/2)
    const actualSum = arr.reduce((acc,curr)=> acc+curr,0)
    return expectedSum - actualSum  
}
console.log(SUmOfNumber([2, 1, 4, 5]))