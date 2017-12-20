// the keyword "let" will assign the variable to the surrounding scope

// this example will work as normal
let a = 1;
console.log('a', a);


// "i" is declared as "let" wich assigns the variable to the surrounding
// function scope and the output of "i" will crash because it's not defined
// within the global scope
(function(){
  let i = 1;
})();
console.log('i', i);


// here you can see the biggest difference between "var" and "let" because
// the variable "b" won't be available to the output other than in the "var"
// example before and the reason to that is because the "let" variable
// will be assigned to the for-loop instead of the surrounding function
(function(){
  for (let b = 0; b < 10; b++) {
    console.log('iteration of b:', b);
  }
  console.log('b', b);
})();
