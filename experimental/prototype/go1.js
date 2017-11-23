'use strict'

let someObject = {
  a: 1,
  b: value => console.log(value + ' :)')
}

Object.setPrototypeOf(someObject, {c: 10})
// is equal to
someObject.__proto__ = {c: 10};

someObject.__proto__.__proto__ = {a: 2, d: 100}

console.log(someObject.a);
someObject.b('Hello World')
console.log(someObject.c);
console.log(someObject.d);
