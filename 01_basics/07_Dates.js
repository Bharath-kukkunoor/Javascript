//Dates

// let myDate =new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,2,23)//sat Mar 23 2024 ->Month starts from 0
// let myCreatedDate = new Date(2024,2,23,5,3)//3/23/2024, 5:03:00 AM

let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);//1715668323918

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());//4 as it is MAY
console.log(newDate.getDay());//2 as it is Tuesday

newDate.toLocaleString('default ',{
weekday:"long",
})



