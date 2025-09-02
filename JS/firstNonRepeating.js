function firstNonRepeatingChar(str){ 
let map ={}
for(c of str ){
    map[c] = (map[c] || 0 )+1
}
for (let c of str) {
  if (map[c] === 1) return c;
}
return null

}

console.log(firstNonRepeatingChar("aabbccddeffgg"))