interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({ color: 'black' })
console.log(mySquare)

interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 20 }
// p1.x = 5 // error!

let ad: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = ad
// ro[0] = 12 // error!
// ro.push(5) // error!
// ro.length = 100 // error!
// ad = ro // error!
ad = ro as number[]

// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。

// 待实现的接口
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
  let result = source.search(subString)
  return result > -1
}

/* class Animal {
  name: string
}
class Dog extends Animal {
  breed: string
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
interface Okay {
  [x: number]: Dog
  [x: string]: Animal
}

interface NotOkay {
  [x: number]: Animal
  [x: string]: Dog
} */

// TODO 不懂
/* interface NumberDictionary {
  [index: string]: number
  length: number // 可以，length是number类型
  name: string // 错误，`name`的类型与索引类型返回值的类型不匹配
} */

/* interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  setTime(d: Date) {
    this.currentTime = d
  }
  constructor(h: number, m: number) {}
} */

// TODO 没看懂！
/* interface NotOkClockConstructor {
  new (hour: number, minute: number)
}

class NotOkClock implements NotOkClockConstructor {
  currentTime: Date
  constructor(h: number, m: number) {}
} */

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}
interface ClockInterface {
  tick()
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep')
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tock')
  }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)

interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideLength: number
}

// TODO 这是什么写法？
let square = <Square>{}
// let square: Square
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5.0

// TODO 混合类型
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = <Counter>function(start: number) {}
  counter.interval = 123
  counter.reset = function() {}
  return counter
}

let cd = getCounter()
cd(10)
cd.reset()
cd.interval = 5.0
