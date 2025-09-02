function countChar(str){
    let map = {}
for(c of str){
map[c] = (map[c] || 0) +1
}
return map
}

console.log(countChar('abracadabra'))