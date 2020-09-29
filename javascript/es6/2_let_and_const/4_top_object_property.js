// the top object is window in browser environment, but in node environment its global
// in es5 the propertys of the top object is equal to the global variables
// in node
/* global.a = 1;
console.log(a === global.a); // true */

var a = 1; // var function is also top object property
console.log(this.a); // 1 in browser

// but let const class is not the top object property
let b = 2;
console.log(this.b);
