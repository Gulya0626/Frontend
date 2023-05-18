// create a function to print hello world
function print() {
    console.log('Hello World');
}

// create a function that accept 1 param
// and print out hello user + (whatever you passed from param) 
function sayHelloTo(name) {
    console.log('Hello user ' + name);
}

// create a function that accept 2 numbers 
// and return the addition result of 2 numbers 
function addNumbers(num1, num2) {
    return num1 + num2; 
}


print(); 
print(); 
sayHelloTo('John');
sayHelloTo('Marry');

console.log(    addNumbers(100,200)    );