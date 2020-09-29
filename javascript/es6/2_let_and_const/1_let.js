// the variable defined by let is not available out of the code block
/* {
  var a = 1;
  let b = 2;
}

console.log(a);
console.log(b); */

// let is a good choice for for
/* for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i); */

// not like the var in for
/* var a = [];
for (var i = 0; i < 10; i++) {
  console.log(i);
  a[i] = function() {
    console.log(i);
  };
}

a[6]();
console.log(i); */

// Hoisting
// for var
/* console.log(a); // undefined
var a = 2;
// for let
console.log(b); // ReferenceError: b is not defined
let b = 2; */

// TDZ temporal dead zone
/* var tmp = 123;
if (true) {
  console.log(tmp);
  let tmp;
} */

/* if (true) {
  // TDZ start
  tmp = "abc";
  console.log(tmp);
  let tmp; // TDZ end
  console.log(tmp);
  tmp = 123;
  log(tmp);
} */

/* typeof x; // ReferenceError: x is not defined
let x; */

// console.log(typeof a);

/* function bar(x = y, y = 2) {
  // says that the params is start from left to the right
  // also a TDZ
  return [x, y];
}
bar(); */

/* function bar(x = 2, y = x) {
  return [x, y];
}
console.log(bar()); */

/* var a = a;
console.log(a);

let b = b;
console.log(b); */

function fun() {
  var a = 10;
  var a = 2;
  console.log(a);
}
fun();
func(); // Hoisting
function func() {
  var b = 10;
  let b = 2; // Identifier 'b' has already been declared
  console.log(b);
}

function bar(arg) {
  let arg; // SyntaxError: Identifier 'b' has already been declared
}

// ES6 let const var function import class
