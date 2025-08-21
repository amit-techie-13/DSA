function pattern2(n){
    for(let i=0;i<n;i++){
        let row =''
        for(let j=0;j<n-i;j++){
            row = row+' '+('*')
        }
        console.log(row)
    }
}
pattern2(5)