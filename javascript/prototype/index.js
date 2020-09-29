function Person() {}

// normally
/* var person = new Person();
person.name = "Kevin";
console.log(person.name); */

// first to meet prototype
/* Person.prototype.name = "Kevin";
var person1 = new Person();
var person2 = new Person();
console.log(person1.name);
console.log(person2.name);

console.log(Person.prototype === person1.__proto__);
console.log(typeof Person.prototype);
console.log(Person.prototype);
console.log(Object.prototype);

console.log(Person.prototype.constructor === Person);
console.log(Person.prototype.constructor);
console.log(Object.prototype.constructor);

console.log(Object.getPrototypeOf(person1)); */

// instance and prototype
/* function Person() {}

Person.prototype.name = "Kevin";
var person = new Person();
person.name = "Daisy";
console.log(person.name);
delete person.name;
console.log(person.name);
console.log(Person.prototype.__proto__);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
console.log(Object.prototype.constructor);
console.log(Person.prototype.__proto__.constructor === Object);
console.log(Object); */

// some special
function Person() {}

var person = new Person();
console.log(person.constructor === Person);
console.log((person.constructor = () => {}));
console.log(person.constructor === Person);
console.log(person.__proto__.constructor === Person);
console.log(Object.getPrototypeOf(person) === person.__proto__);

// for more infomation, please visit https://mp.weixin.qq.com/s/QIi-zZqTfC4BDJGL0q20Jg
