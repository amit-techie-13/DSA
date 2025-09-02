function createCounter() {
  let count = 0;
console.log('counter created')

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
const counter1 = createCounter();
counter(); // 1
counter1(); // 1  
counter();//2
//A closure is created when a function remembers variables from its lexical scope, 
// even after the outer function has finished execution.
//Hoisting means JavaScript moves declarations to the top of their scope during compilation
//  — but not the assignments.