// the keyword "const" could be compared to "let" but with on big difference:
// a "const" variable couldn't be completely reassigned

// this example will work as normal
const a = 1;
console.log('a', a);

// but if you try to assign a another value you'll get an assignment error
// because you can't change the value of a const declared variable
a = 2;
console.log('a', a);



// in the next example you'll see what I mean with
// "couldn't be completely reassigned"
const b = {
  hello: "world!"
}

console.log('b.hello', b.hello);

// we'll able to assign a new value to the "hello" property
// within the "b" object even "b" is declared as "const"
b.hello = "Ben";

console.log('b.hello', b.hello);

// but we can't assign e. g. a new object to "b" itself
b = {
  test: "value"
}

console.log('b.hello', b.test);


// "i" is declared as "const" which assigns the variable to the surrounding
// function scope and the output of "i" will crash because it's not defined
// within the global scope
(() => {
  const i = 1;
})()
console.log('i', i);


// other than in the "let" example we can't use the for-loop anymore because
// it would try to change the const j which would result in an error,
// instead we're using an if-statement with "true" as condition
// ("true" as if-condition will always lead to an execution of the code within
// the if-statement)
// "j" will now assigned to the surrounding scope which is the if-statement
// and won't be available to the output afterwards
if (true) {
  const j = 1;
}
console.log('j', j);
