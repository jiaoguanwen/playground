let isDone: boolean = true

let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
// 八进制
let octal: number = 0o744

let color: string = 'blue'

let list: number[] = [0, 1, 2]
let arr: Array<number> = [1, 2, 3]

// Tuple
let tuple: [string, number] = ['a', 10]
console.log(tuple[0].substr(1))
// TODO 这里越界报错？Index '2' is out-of-bounds in tuple of length 2.
// tuple[2] = 20
// (string | number) 是联合类型

enum Color {
  Red,
  Green = 6,
  Blue
}
let c: Color = Color.Green
console.log(c)
console.log(Color[6])

let notSure: any = 4
notSure = 'jiaoguanwen'
notSure = false

console.log(notSure.toString())

let prettySure: Object = 4
console.log(prettySure)
// TODO 为什么声明的Object，typeof是number
console.log(typeof prettySure)
// console.log(prettySure.toFixed())

let anyList: any[] = [1, 2, 'a']
let anyArr: Array<any> = [1, 2, 'a']

function warnUser(): void {
  console.log('there is nothing return and no type')
}
warnUser()

let voidVar1: void = undefined
let voidVar2: void = null

let undefinedVar: undefined = undefined
let nullVar: null = null

function error(message: string): never {
  throw new Error(message)
}

function infiniteLoop(): never {
  while (true) {}
}

// TODO declare是什么意思？
declare function create(o: object | null): void

create({ a: 1 })
create(null)
// 这里会报错
// create(2)

let someValue: any = 'this is a string'
// someValue = 4
let strLength1: number = (<string>someValue).length
// 在jsx中仅支持as
let strLength2: number = (someValue as string).length
