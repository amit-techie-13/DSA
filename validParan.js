function validParan (str){
  let stack =[];
  let match = {
      ")":"(",
      "}":"{",
      "]":"["
  }
    for(let i = 0;i< str.length;i++){
      if(str[i] === '[' || str[i] === '{' || str[i] === '('){
          stack.push(str[i])
      }else{
          if(stack.length === 0 || stack.pop()!==match[str[i]]) return false
      }
    }
  return stack.length === 0;
}

console.log(validParan("()[]{}"));     // true
console.log(validParan("([{}])"));     // true
console.log(validParan("(]"));         // false
console.log(validParan("({[})"));      // false
console.log(validParan(")("));         // false
console.log(validParan("")); 