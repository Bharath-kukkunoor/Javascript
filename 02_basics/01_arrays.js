//Arrays

const myArr=[1,4,3,2,4,5]
// const fruits=["Apple","Mango","Grapes"]

// const myArr2=new Array(2,4,3,2)
// // console.log(myArr[0]);

// //Array Methods

// myArr.push(6);
// myArr.pop();


// myArr.unshift(1)//adds 0 to the beginning of array
// myArr.shift()//adds 0 to the beginning of array

// console.log(myArr.includes(3));//retuns true
// console.log(myArr.indexOf(3));//if given greater values it gives -1 otherwise give index value of the number

// const newArr=myArr.join()//converts an array to string

// console.log(myArr);
// console.log(newArr);


//slice, splice

console.log("A",myArr)

const myn1=myArr.slice(1,4)

console.log(myn1);

console.log("B",myArr)
const myn2=myArr.splice(1,4)
console.log("C",myArr)
console.log(myn2);