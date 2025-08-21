function pattern2(num){
    for(let i=0;i<num;i++){
        let row =''
        for(let j =0;j<i+1;j++){
            row = row+' *'
        }
        console.log(row)
    }
}
pattern2(4)