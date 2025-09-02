function step1(next) {
  setTimeout(() => {
    console.log("Step 1 done");
    next();
  }, 1000);
}

function step2(next) {
  setTimeout(() => {
    console.log("Step 2 done");
    next();
  }, 1000);
}

function step3() {
  setTimeout(() => {
    console.log("Step 3 done");
  }, 1000);
}

step1(()=>{
    step2(()=>{
        step3()
    })
})
console.log('end')
