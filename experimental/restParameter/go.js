// function superEasy(paramOne, paramTwo) {
//   let index = 0
//   let outputString = ''
//   while(arguments[index]) {
//     outputString += ` ${arguments[index]}`
//     index++
//   }
//   console.log(outputString);
// }

const superEasy = (...restParam) => {
  const outputString = restParam.reduce((acc, param) => `${acc} ${param}`, '')
  console.log(outputString);
}

superEasy('Hello', 'World', '!')
