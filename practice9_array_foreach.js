let names = ["Clark", "Bruce", "Barry", "Diana", "John"];

// function printStuff(stuff) {
//     console.log(stuff);
// }

// const printStuff =  stuff => console.log(stuff);
    

// names.forEach(  printStuff  ); 

names.forEach(stuff => console.log(stuff)); 


names.push("Snow");

console.log(names);
// [ 'Clark', 'Bruce', 'Barry', 'Diana', 'John', 'Snow' ]

// store the first and second item into a variable a, b 
let [a, b] = names;  

console.log(a + ' has character count of ' + a.length);
// Clark has character count of 5
console.log(b + ' has character count of ' + b.length);
// Bruce has character count of 5


// // create a new empty array with name charCountArray
// let charCountArray = []; 
// // go through each and every item in names array 
// for (let each of names){
//     // get the character count and add it into charCountArray using push method
//     charCountArray.push(  each.length  ); 
// }
/**
 *  array's map method is a method can transform each element
 *  so we can get new array with transformed element
 * it expect you to provide a function that accept 1 parameter
 * and return a new value of any kind 
 * easy way to provide such function is using array syntax 
 *  each => do Something to return a value here
 * IT HAS NOTHING TO DO WITH THE MAP AS KEY VALUE PAIR)
 * SEE MAP METHOD AS TRANSFORMER 
 */
let charCountArray = names.map(  each => each.length  )

console.log(charCountArray);

let upperNames = names.map(each => each.toUpperCase()) 
console.log(upperNames);


// filter method of array expect you to provide a function 
// that accept 1 param and return boolean value 

let filteredNames = names.filter(each => each.length == 4);
console.log(filteredNames); 

console.log("--------------");

let scores = [56, 99, 65, 100, 45]; 
console.log(scores);
// create a filtered array to only store the numbers greater than 70
let passedScores = scores.filter(score => score > 70); 
console.log(passedScores);

