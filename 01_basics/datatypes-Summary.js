// Primitive (call by value)

// 7 types:  String, Number, Boolean, null, undefined, Symbol, BigInt

// JS is dynamically typed

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false

const bigNumber = 2345678876543456787654345n


// Non Primitive (Reference)

// Array, Objects, Functions

const heroes = ["Shaktiman", "Naagraj", "Doga"]
let myObj = {
    name: "Himanshu",
    age:22,
}

const myFunction = function(){
    console.log("Hello World!")
}

console.log(typeof bigNumber)