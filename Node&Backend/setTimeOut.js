console.log('start')

setTimeout(() => {
    console.log("setTimeOut Execution")
},0);

setImmediate(()=>{
    console.log('setImmediate Execution')
})

process.nextTick(()=>{
    console.log('nestTick executed')
})

console.log("end")
// console.log("Start") → runs immediately.

// setTimeout(..., 0) → goes to Timers Phase of the event loop.

// setImmediate(...) → goes to Check Phase of the event loop.

// process.nextTick(...) → goes into the microtask queue (executed immediately after current call stack, before event loop continues).

// console.log("End") → runs immediately.



// (Note: Sometimes setTimeout vs setImmediate order can vary depending on Node internals and environment, but generally above order holds when setTimeout is 0ms.)

// 🔍 Step 3: Why does process.nextTick execute first?

// process.nextTick() is a microtask in Node.js.

// Microtasks run right after the current operation finishes, before the event loop moves to the next phase.

// So after console.log("End"), Node sees a pending nextTick and executes it immediately, before looking at setTimeout (Timers Phase) or setImmediate (Check Phase).