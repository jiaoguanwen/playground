// es module
import sum from './sum'

// commonjs
var minus = require('./minus')

// amd, async, will generate a new js file
require(['./multi'], function (multi) {
    console.log(multi(2, 3))
})

console.log('1 + 2 : ', sum(1, 2))
console.log('2 - 1 : ', minus(2, 1))