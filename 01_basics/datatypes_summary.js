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

// console.log(typeof myFunction);


//reference document https://tc39.es/ecma262/#sec-typeof-operator



//***********************************Memory allocation************************************************

// Stack (Primitive)=> we get a copy of it, Heap (Non-Permitive)=> we get a reference of it

let myname="Bharath"

let othername=myname

othername="Bharath K V";

// console.log(myname);
// console.log(othername);


let userOne={
    email:"user1@gmail.com",
    upi:"user1@ybl"
}

let userTwo= userOne
userTwo.email= "user2@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);



