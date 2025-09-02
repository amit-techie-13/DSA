function mountainPeak(arr){
    // console.log(arr)
    for(let i =1;i<arr.length;i++){
        // console.log(arr[i])
        if(arr[i-1]< arr[i] && arr[i]>arr[i+1])return i
    }
}

console.log(mountainPeak([0,3,8,9,5,2]))