const { a } = require('./moduleA');
const { b, c } = require('./moduleB');
const moduleB = require('./moduleB');
const moduleC = require('./moduleC');
console.log(a);
console.log(b, c(a));
console.log(moduleB);
console.log(moduleC());
