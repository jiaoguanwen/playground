/* for (var i = 0; i < 10; i++) {
  // capture the current state of 'i'
  // by invoking a function with its current value
  // this is called IIFE(立即执行的函数表达式)
  ;(function(i) {
    setTimeout(function() {
      console.log(i)
    }, 100 * i)
  })(i)
} */

/* function f(input: boolean) {
  let a = 100

  if (input) {
    // Still okay to reference 'a'
    b++
    // before this line, up codes is dead zone(暂时性死区)
    let b = a + 1
    return b
  }

  // Error: 'b' doesn't exist here
  return b
} */

// 在catch语句里声明的变量也具有同样的作用域规则。
/* try {
  throw "oh no!";
}
catch (e) {
  console.log("Oh well.");
}

// Error: 'e' doesn't exist here
console.log(e); */

function foo() {
  // okay to capture 'a'
  console.log(a)
  return a
}

// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo()

let a

type C = { a: string; b?: number }

function f({ a, b = 0 } = { a: '' }): void {
  // ...
}
f({ a: 'yes' }) // ok, default b = 0
f() // ok, default to {a: ""}, which then defaults b = 0
// f({}) // error, 'a' is required if you supply an argument

// 丢失其方法
class D {
  p = 12
  m() {}
}
let d = new D()
let clone = { ...d }
clone.p // ok
// clone.m() // error!
