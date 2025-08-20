// console.log(x)
// var x = 1;
// a();
// // b();
// console.log(x)

//  function a(){
//     var x = 10
//     console.log(x)
//     function z(){
//     var x = 1000
//     console.log(x)
//  }
//  }
// function b(){
//     var x = 100
//     console.log(x)
//  }

// function x(){
//     var a = 8;
//     function y (){
//         console.log(a)
//     }
//     a =100
//    return  y
// }
// var z = x();
// console.log(z)
// z()

// function X(){
//     for(var i =1; i<=5;i++){
//         function count(i){
//   setTimeout(() => {
//             console.log (i)
//         }, i*1000);
//         }
//       count(i)
//     }
//     console.log('hello Amit')
// }
// X()

// console.log('start')
// setTimeout(() => {
//     console.log('timer')
// }, 0);
// console.log('end')
// function x(y){
//     console.log('x');
//     y()
// }
// x(function y(){
//     console.log('Y')
// })

// document.getElementById('click').addEventListener('click',function(){
//     console.log(' am clicked.')
// })


// function higherOrder(fn) {
//   return function() {
//     console.log("Before");
//     fn();
//     console.log("After");
//   };
// }

// function sayHi() {
//   console.log("Hi Amit");
// }

// const wrapped = higherOrder(sayHi);
// wrapped();

// const arr = [ 1,2,3,4,-50,6,7,8,-9]


// function findMax(arr){
//     let max = arr[0];
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }
//     return max;
// }

// console.log(findMax(arr))

//  const output=   arr.reduce(function(acc,curr){
//         acc = acc+ curr;
//         return acc;
//     },0)


// console.log(output)
// let a = {};
// let b = a;
// a = null;
// console.log(b);
// console.log(typeof null); 

// const p1 = new Promise((resolve,reject)=>{
// setTimeout(() => {
//     reject('P1 fffff')
// }, 2000);
// })

// const p2 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         rej('P2 failed')
//     }, 1000);
// })

// const p3 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         rej('P3 failed')
//     }, 3000);
// })

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.error(err)
// })
// Promise.any([p1,p2,p3]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{console.log(err.errors)})

// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log('from race',res)
// }).catch((err)=>{console.log('from race',err)})

// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{console.log(err)})

const pert1 = new Promise((res,rej)=>{
    setTimeout(() => {
        res(' i am process 1')
    }, 20000);
})
const pert2 = new Promise((res,rej)=>{
    setTimeout(() => {
        res(' i am process 2')
    }, 10000);
})

async function getFunction(){
    console.log(' first visit')
   const val1 = await pert1;
   console.log(1234)
   console.log(val1);
   const val2 = await pert2;
   console.log(5678)
   console.log(val2);


}
getFunction()