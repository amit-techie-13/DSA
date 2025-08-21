function pattern2(num){
    for(let i=0;i<num;i++){
        let row =''
        for(let j=0;j<=i;j++){
            row = row+' '+(i+1)
        }
        console.log(row)
    }
}
pattern2(5)