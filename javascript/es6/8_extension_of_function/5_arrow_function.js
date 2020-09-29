// NO arguments, USE rest params
/* const a = (...params) => {
  console.log(params);
};

a(1, 2, 3, 4);

const b = (a, ...params) => {
  console.log(a);
  console.log(params);
};

b('a', 21);

const numbers = (...nums) => nums;

console.log(numbers(1, 2, 3, 4, 5));

const headAndTail = (head, ...tail) => [head, tail];

console.log(headAndTail(1, 2, 3, 4, 5)); */

// ATTENTION
// 1. this
// arrow function bind this when it is defined, here there is no id
/* function foo() {
  // this.id = 20;
  setTimeout(() => {
    console.log('id: ', this.id);
  }, 100);
}
var id = 21;
function bar() {
  // this.id = 20;
  setTimeout(function() {
    console.log(this);
    console.log('id: ', this.id);
  }, 100);
  console.log(this);
}
bar();
foo();
foo.call({ id: 42 }); // change this to { id: 42 } */

// NOT CLEAR
// for more infomation, please visit http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0
/* function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // arrow function
  setInterval(() => this.s1++, 1000);
  // normal function
  setInterval(function() {
    this.s2++;
  }, 1000);
}
var s2 = 0;
var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', this.s2), 3100); */
// s1: 3
// s2: 0


// var t = new numbers(1);
