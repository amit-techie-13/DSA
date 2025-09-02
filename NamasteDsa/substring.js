function substring(arr){
let first = arr[0]
let last = arr[arr.length-1]
if(first.includes(last)){
    return true
}else{
    return false
}

}

console.log(substring(['amit','am']))