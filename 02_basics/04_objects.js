// const tinuser=new Object ()// returns {}, it is a singleton object

const tinuser= {} //non singleton object

 tinuser.id="123abc"
 tinuser.name="Sammy"
tinuser.isLoggedIn=false


// console.log(tinuser);

const Regularuser={
    email:"sample@mail.com",
    fullname:{
        userfullname:{
            firstname:"Bharath",
            lastname:"K V"
        }
    }
}

// console.log(Regularuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3={obj1,obj2} //inserts object inside object

const obj3=Object.assign({},obj1,obj2,obj4)//shows all objects inside a single object=>
    //  here {} stores the whole object inside it


console.log(obj3);


