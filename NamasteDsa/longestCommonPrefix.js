function longestCommonPrefix(strs){
let sorted = strs.sort()
let res = ''
let first = sorted[0]
let last = sorted[strs.length-1]
for(let i=0;i<first.length;i++){
    if(first[i] === last[i]){
        res =res+first[i]
    }else{
        break;
    }
}
return res

}

console.log(longestCommonPrefix(["flower","flow","flight","from"]))