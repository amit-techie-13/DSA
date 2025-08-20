function appearOnce(arr){
    let map = {}
    for(let i =0;i<arr.length;i++){
        map[arr[i]] = (map[arr[i]] || 0) +1
    }
    for(keys in map){
        if(map[keys] === 1){
            return +keys
        }
    }
}

console.log(appearOnce([4, 1, 2, 1, 2]))