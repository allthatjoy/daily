// PRINTING THE RESULTS FOR ARRAYS AND OBJECTS WHILE USING THE SPREAD OPERATOR
// const foo = ["Hello", "World", "!"]
// const bar = {hello: "World", exclamation: "Mark"}
// const hello = "world"
//
// console.log(foo);
// console.log(...foo);
//
// console.log(bar);
// console.log({...bar, exlamationMark: '!'});
//
// console.log(hello);
// console.log(...hello);

// SPREAD OPERATOR FOR FUNCTIONS CALLS USING AN ARRAY
// const foo = ["Hello", "World", "!"]
//
// const printer = (...items) => items.forEach(item => console.log(item))
//
// printer(...foo)

// SPREAD OPERATOR FOR THE CREATION OF A NEW ARRAY
// const foo = ["Hello"]
// const bar = ["World", "!"]
//
// const foobar = [...foo, ...bar]
//
// console.log(foobar);

// SPREAD OPERATOR FOR THE CREATION OF A NEW OBJECT
//
// const foo = {Hello: "World"}
// const bar = {exclamation: "Mark"}
//
// console.log({...foo, ...bar});

// SPREAD OPERATOR ON A STRING DURING A FUNCTION CALL
// const input = "FooBar"
//
// const printer = (...letters) => letters.forEach(letter => console.log(letter))
//
// printer(...input)
// printer("F","o","o","B","a","r",)
// /*
// OUTPUT:
// F
// o
// o
// B
// a
// r
// */
