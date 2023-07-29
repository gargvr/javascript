let score = "Himanshu"

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) 

// "33" => 33
// "33abc" => NaN (type number)
// true =>1; false=> 0
// null => 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 => true
//0 => false
// "" => false
//"someString" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber)

// ************************************* Operations ***********************************

let value = 3
let negValue = -value
//console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Himanshu"
let str3 = str1 + str2

console.log(str3) // hello Himanshu

console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32

console.log(+true) // 1
console.log(+"") // 0

let num1, num2, num3

num1 = num2 = num3 = 2+2 // bad parctise

let x = 3
const y = x++

console.log(`x:${x}, y:${y}`) // x:4, y:3

let a = 3
const b = ++a

console.log(`a:${a}, b:${b}`) // a:4, b:4