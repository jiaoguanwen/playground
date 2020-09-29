function Parent() {
  this.value = 'parent';
}

Parent.prototype.sayHi = function() {
  console.log('hi');
};

function Child() {
  Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

var child = new Child();

console.log(child);
