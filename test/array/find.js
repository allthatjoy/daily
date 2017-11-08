// The find-function is a new function in ECMAScript 6
// Its used to find the fist matching element.
// It takes a function which defined the matching element by
// comparing the given value in a way resulting in a
// boolean value.

const values = [
  {animal: 'snake', dangerousLevel: 5},
  {animal: 'cat', dangerousLevel: 1},
  {animal: 'tiger', dangerousLevel: 5},
  {animal: 'teddy', dangerousLevel: 0},
  {animal: 'mouse', dangerousLevel: 1},
]

console.log(values.find(object =>
  object.dangerousLevel == 0).animal);
