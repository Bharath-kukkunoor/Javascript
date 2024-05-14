const Heros=["IronMan","Thor","Spiderman"]

const DcHeros=["Superman","Batman","Flash"]

// Heros.push(DcHeros)//pushes one array inside another[ 'IronMan', 'Thor', 'Spiderman', [ 'Superman', 'Batman', 'Flash' ] ]


// console.log(Heros[3][1]);

// const concatheros=Heros.concat(DcHeros)//combines both arrays [ 'IronMan', 'Thor', 'Spiderman', 'Superman', 'Batman', 'Flash' ]
// console.log(concatheros)

//spread operator=> combines both the arrays 

const allheros=[...Heros,...DcHeros]
// console.log(allheros);

const anotherallheros=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_anotherallheros=anotherallheros.flat(2)//can use Infinity as parameter

// console.log(real_anotherallheros);

console.log(Array.isArray("Bharath"))//returns False
console.log(Array.from("Bharath"))//separates the whole string
console.log(Array.from({name:"Bharath"}))//cannot directly convert to array as it is in key value pair so returns []

const score1=100
const score2=200
const score3=300

console.log(Array.of(score1,score2,score3));// displays all variable values in a array







