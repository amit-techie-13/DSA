function removeDuplicates(arr){
    let p1=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[p1]){
                p1=p1+1
                arr[p1]=arr[i]
        }
    }
    return [p1+1,arr.slice(0,p1+1)]
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))