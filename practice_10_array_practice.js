let prices = [17, 87, 54, 85, 10]; 
// prices.forEach(  bla => console.log(bla)  );

// prices.forEach(bla => {
//     console.log(bla);
//     console.log('This is another line');
// });
// function processItem(bla) {
//     console.log(bla);
//     console.log('This is another line');
// }

// const processItem = (bla)=>{
//         console.log(bla);
//         console.log('This is another line');
//     }

// prices.forEach( processItem ); 
prices.forEach(each => {
    console.log(each);
    console.log('This is another line');
}); 


// processItem('Hello World');
// processItem(12);
// processItem(16);
// processItem('more stuff here');

// create a new array with each number doubled from prices array 
//[17, 87, 54, 85, 10]; ---- > [34, 174, 108, 170, 20]
let doubledPrices = prices.map(each => each * 2);
console.log(doubledPrices); 

// create a new array with item turned into this "price is YourPriceHere"
//[17, 87, 54, 85, 10]; ---- >
// ["price is 17", "price is 87", .........]
let tagPrices = prices.map(each => "price is " + each);
console.log(tagPrices); 


let names = ["Clark", "Bruce", "Barry", "Diana", "John"];
// transform this array to get new array of json Object 
// [ {firstName : "Clark"} , {firstName : "Bruce"} .....

let firstObj = {
      firstName : "Clark"
   }; 