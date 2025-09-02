function groupObject(arr){
    let map = {}
    for(let i =0;i<arr.length;i++){
        if(map.hasOwnProperty(arr[i].marks)){
            map[arr[i].marks].push(arr[i].name)
          
        }else{
            map[arr[i].marks]=[arr[i].name]
        
        }
    }
    return map
}

console.log(groupObject([
  { name: "Amit", marks: 85 },
  { name: "Ravi", marks: 70 },
  { name: "Sita", marks: 85 },
  { name: "Geeta", marks: 70 }
]))