/* class Animal {
  name: string
  constructor(theName: string) {
    this.name = theName
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    // console.log(this.name)
    super(name)
  }
  move(distanceInMeters = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters)
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters = 45) {
    console.log('Galloping...')
    super.move(distanceInMeters)
  }
}

let sam = new Snake('Sammy the Python')
let tom: Animal = new Horse('Tommy the Palomino')

sam.move()
tom.move(34) */

/* class Person {
  protected name: string
  // private name: string
  constructor(name: string) {
    this.name = name
  }
  getName(): void {
    console.log(this.name)
  }
}

class Employee extends Person {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

let howard = new Employee('Howard', 'Sales')
console.log(howard.getElevatorPitch())
// console.log(howard.name) // 错误 */

/* class Person {
  protected name: string
  protected constructor(theName: string) {
    this.name = theName
  }
}

// Employee 能够继承 Person
class Employee extends Person {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

let howard = new Employee('Howard', 'Sales')
// let john = new Person('John') // 错误: 'Person' 的构造函数是被保护的. */

/* class Octopus {
  readonly name: string
  readonly numberOfLegs: number = 8
  constructor(theName: string) {
    this.name = theName
  }
}
let dad = new Octopus('Man with the 8 strong legs')
// dad.name = 'Man with the 3-piece suit' // 错误! name 是只读的. */

// 参数属性 在一个地方定义并初始化一个成员
/* class Octopus {
  readonly numberOfLegs: number = 8
  // 参数属性 前面也可以加保护
  constructor(private readonly name: string) {}
  getName() {
    console.log(this.name)
  }
}
let dad = new Octopus('Man with the 8 strong legs')
dad.getName()
// console.log(dad.name) */

/* let passcode = 'secret passcode2'

class Employee {
  private _fullName: string

  get fullName(): string {
    return this._fullName
  }

  set fullName(newName: string) {
    if (passcode && passcode == 'secret passcode') {
      this._fullName = newName
    } else {
      console.log('Error: Unauthorized update of employee!')
    }
  }
}

let employee = new Employee()
employee.fullName = 'Bob Smith'
if (employee.fullName) {
  console.log(employee.fullName)
} */

/* abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log('Department name: ' + this.name)
  }

  abstract printMeeting(): void // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.')
  }

  generateReports(): void {
    console.log('Generating accounting reports...')
  }
}

let department: Department // 允许创建一个对抽象类型的引用
// department = new Department() // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
department.printName()
department.printMeeting()
// department.generateReports() // 错误: 方法在声明的抽象类中不存在，即使是抽象子类的实例，但是他是一个抽象类类型
 */

class Greeter {
  static standardGreeting = 'Hello, there'
  greeting: string
  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting
    } else {
      return Greeter.standardGreeting
    }
  }
}

let greeter1: Greeter
greeter1 = new Greeter()
console.log(greeter1.greet())

// TODO 没懂是何含义
let greeterMaker: typeof Greeter = Greeter
greeterMaker.standardGreeting = 'Hey there!'

let greeter2: Greeter = new greeterMaker()
console.log(greeter2.greet())
