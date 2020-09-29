// ES5 no block scope
// 1 Hoisting
/* var tmp = new Date();
function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'tmp';
  }
}

f(); // undefined */
// 2 leakage be global
/* var s = 'hello';
for (var i = 0; i < s.length; i++) {
  console.log(i);
}
console.log(i); // i became to be a global variable 5 */

// in the same block scope, can not declare mutil variables
// but in different scope, you can
/* {
  {
    {
      let a = 'a';
    }
    // let a = 'b';
    console.log(a);
  }
} */

// block scope and function declare
// in es5, it's not valid, but in most javascript environment, it's vaild
// test 1
/* if (true) {
  function f() {}
  console.log(f);
}

// test 2
try {
  function fun() {}
  console.log(fun);
} catch (error) {
  console.error(error);
} */

// use function expression first in block scope
{
  let f = function() {
    // do something
  };
}
