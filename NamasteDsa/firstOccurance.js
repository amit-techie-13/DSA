function firstOccurance(haystack,needle){
let index=-1
let isConsist = haystack.includes(needle)
if(isConsist){
    index = haystack.indexOf(needle)
    console.log(haystack.indexOf(needle,index+1))
}
return index
}

console.log(firstOccurance("sadbutsadbutsad",  "but"))