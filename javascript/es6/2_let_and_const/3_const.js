// variable declare by const must initialize at once
// const a;

// variable declare by const can not change
/* const a = 1;
a = 2; */

// TDZ
/* {
  const a = 1;
  const a = 2;
} */

/* {
  console.log(a);
  const a = 2;
} */

// const point to a address in ram
/* const a = {};
a.name = 'a';
console.log(a);
a = []; */

// freeze
// 'use strict';
/* const foo = Object.freeze({});
foo.name = 'foo';
console.log(foo); */

// recurrence freeze
var constantize = obj => {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === 'object') {
      constantize(obj[key]);
    }
  });
};
