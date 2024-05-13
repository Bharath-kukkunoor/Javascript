// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1)
// console.log("02">1) type conversion happens here

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

//The resaon is that an equality check == and comparisons > < >= <= work differently
//Comparisons convert null to a number, treating it as 0.
// that is wht null>=0 is true and null>0 is false 

//Strict check=> ===
console.log(2===2);

