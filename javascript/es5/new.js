function newNew() {
  // 1. creata a new Object
  var newObj = {};
  // handle arguments, it is a object, has a length, array-like
  // get constructor from the arguments
  var Con = [].shift.call(arguments);
  // 2. make the ret link to the constructor
  // if can not touch __proto__, use Object.setPrototypeOf
  newObj.__proto__ = Con.prototype;
  // 3. call the construtor
  var ret = Con.apply(newObj, arguments);
  // 4. judge the ret is a object
  return typeof ret === "object" ? ret : newObj;
}

function Person(name) {
  this.name = name;
}

console.log(new Person("jiao"));

console.log(newNew(Person, "tian"));

// other methods

function _new(Fn, ...arg) {
  const obj = Object.create(Fn.prototype);
  const _obj = Fn.apply(obj, arg);
  return _obj instanceof Object ? _obj : obj;
}

console.log(_new(Person, "fan"));
