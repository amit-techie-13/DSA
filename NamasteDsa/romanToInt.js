var romanToInt = function(s) {
    let map = 
       {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let total = 0
    for (let i = 0; i<s.length;i++){
        let current = map[s[i]]
        let next = map[s[i+1]]
        console.log("🚀 ~ romanToInt ~ next:", next,current)
        if(current<next){
        
            total = total + next-current
            i++
        }else{
           
            total = total + current 
        }
    }
    console.log("🚀 ~ romanToInt ~ str:", total)
};

romanToInt('XIV')