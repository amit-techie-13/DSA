let students = {}
students.Amit = [80,90]
students.Ravi = [75,88]
students.Amit.push(91)
students.Ankita = [56,98,99]
students.Ankita.push(100)

function GetAVg(arr){
let sum = arr.reduce((acc,curr)=> acc+curr,0)
let avg = sum/arr.length
return avg
}

function loopObj(objs) {
  let avgStackUser = {}
  for (let key in objs) {
    avgStackUser[key] = GetAVg(objs[key])
  }

  let max = 0
  let topStudent = ""

  for (let key in avgStackUser) {
    if (avgStackUser[key] > max) {
      max = avgStackUser[key]
      topStudent = key
    }
  }

  return `Student with highest average is ${topStudent} with avg mark ${max}`
}

console.log(loopObj(students))