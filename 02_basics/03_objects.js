// Singleton
// object.create

//Object literals


 const mysym=Symbol("Key1")

const jsuser={
    name:"Bharath",//name is stored as "name" in background
    "full name":"Bharath K V",//if it is declared like is it cannot be accessed by "."
    mysym :"mykey1",//It is not used as a symbol here//It is used as a string here
    [mysym] :"mykey1",//this is how you declare a symbol
    age:29,
    location:"Bengaluru",
    email:"bharath@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}

// console.log(jsuser.email);//this is a old method to access an object  

// console.log(jsuser["email"]);//can access using this method too

// console.log(typeof jsuser[mysym]);

// jsuser.email="abc@gmail.com"//here we can override the object
// Object.freeze(jsuser)//it freezes the override of object
// jsuser.email="xyz@gmail.com"//this doesnt affect the previously stored value of email
// console.log(jsuser);



jsuser.greeting=function(){
    console.log("Hello User");
}

jsuser.greetingTwo=function(){
    console.log(`Hello User, ${this.name}`);//string interpolation
}


console.log(jsuser.greeting())
console.log(jsuser.greetingTwo())
