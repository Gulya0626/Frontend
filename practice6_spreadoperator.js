let names = ["Clark", "Bruce", "Barry", "Diana", "John"];
// store the first item and second item into a variable separately

// let firstItem = names[0];
// let secondItem = names[1];

// this is called destructing 
// below code will take the first item and second item in names array 
// and assign it to a variable called firstItem, secondItem
let [firstItem, secondItem , x] = names; 

console.log(firstItem);
console.log(secondItem);
console.log(x);

console.log('------------------**********-----------------');

// you may also use destructing for object 
// to store the value of the fields in one shot 
console.log("-----------");
let c1 = {
    make: "Tesla",
    model: "X",
    year: 2023,
    color: "white" 
}

// store the value of make and color into 2 variables
// let make = c1.make; 
// let color = c1.color; 

let { make, color, year } = c1; 
console.log(make);
console.log(color);
console.log(year);