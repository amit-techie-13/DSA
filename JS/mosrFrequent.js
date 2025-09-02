function mostFrequentElement(arr){
    let map = {}
    for(let i = 0;i<arr.length;i++){
        map[arr[i]] =(map[arr[i]] || 0)+1
    }
    let max =0;
    let elem = 0
    for(keys in map){
        if(map[keys] > max){
            max = map[keys]
            elem = +keys
        }
    }
    return elem
}

console.log(mostFrequentElement([1, 3, 1, 3,3,3,3, 2, 1]
))