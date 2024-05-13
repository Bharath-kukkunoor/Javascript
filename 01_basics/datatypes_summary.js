//Primitive
//7 types: String, Number, Boolean, null, undefined, Symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=true;
const outsideTemp=null;
let userEmail;

const id= Symbol('123')
const anotherId=Symbol('123')

// console.log(id===anotherId);

const bigNumber= 232312345654323456543n

//Reference type(non premitive)

//Array,Objects, Functions

const fruits=["Apple","Mango","Grapes"]

let sampleOb={
    name:"Bharath",
    age:29
}

const myFunction= function(){

    console.log("hello");
}

console.log(typeof myFunction);


//reference document https://tc39.es/ecma262/#sec-typeof-operator