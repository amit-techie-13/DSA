function longestSuffix(arr){
    let first = arr[0].split('');
    let last = arr[arr.length-1].split('')
    let firstLen = first.length-1
    let lastLength = last.length-1
    let res = ''
    for(let i=(firstLen);i>=0;i--){
        if(first[i] === last[lastLength]){
            res+=first[i]
            lastLength--
        }else{
            break
        }
    }
    return res.length>0 ? res.split('').reverse().join(''):false
}

console.log(longestSuffix(['sumit','amit']))