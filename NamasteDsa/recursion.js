let arr = [2,4,6,8,10]
function sumOfNnumber(n){
   let isOdd = arr[n] %2 !==0;
   if(n==0){
     return isOdd? arr[n]:0;
   }
   return isOdd ? arr[n] + sumOfNnumber(n-1)  : 0+ sumOfNnumber(n-1)
}

console.log(sumOfNnumber(4))