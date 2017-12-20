// JavaScript in general words with the so called function scope

var a = 1;
console.log('a', a);


// "i" without a declaration will be assigned to the global scope and
// results into the same output as the exampe above
(function(){
  i = 1;
})();
console.log('i', i);


// "j" is declared within the function which assigns j to the wrapping function
// and "j" won't be available for the output anymore
(function(){
  var j = 1;
})();
console.log('j', j);


// "b" is declared and initialized within the for-loop but is assigned to the
// function scope which makes it again available within the whole function after
// the for-loop
(function(){
  for (var b = 0; b < 10; b++) {
    console.log('iteration of b:', b);
  }
  console.log('b', b);
})();
