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

// const obj3=Object.assign({},obj1,obj2,obj4)//shows all objects inside a single object=>
//     //  here {} stores the whole object inside a sinle object otherwise 
// // it would store the object inside obj1 by default


const obj3 ={...obj1,...obj2,...obj4}//the most efficient way to add all objects
//  into a single object is by using spread operator

// console.log(obj3);


const users=[//array of objects
    {
    id:1,
    email:"sample1@gmail.com",
},
{
    id:2,
    email:"sample2@gmail.com",
},
{
    id:3,
    email:"sample3@gmail.com",
},
]

users[1].email

// console.log(tinuser)


// console.log(Object.keys(tinuser));//get the key properties of a object
// console.log(Object.values(tinuser));//get the values properties of a object
// console.log(Object.entries(tinuser));//get the key value pair entries
// console.log(tinuser.hasOwnProperty("isLoggedIn"));//used to check whether the object has the specified property as its own property. 



const course={
    coursename:"Javascript",
    price:"998",
    courseInstructor:"Bharath",
}

// course.courseInstructor

const {courseInstructor:instructor}=course//we can rename a property of an object by writing the code in this way 

// console.log(courseInstructor);
console.log(instructor);


const navbar =({company})=>{//Here the object "company" is being destructured

}

navbar(company="Mycompany")

// {
//     "name":"Bharath",
//     "coursename":"javascript",
//     "price":"free"
// }

[
    {},
    {},
    {}
]