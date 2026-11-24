const name="John Doe";
let age=30;
var isStudent=true;

city="New York";

//name="Jane Smith"; // This will throw an error because 'name' is a constant and cannot be reassigned.

age=45; // This is valid because 'age' is declared with 'let' and can be reassigned.

isStudent=false; // This is valid because 'isStudent' is declared with 'var' and can be reassigned.

{
    let city="Los Angeles"; // This is valid because 'city' is declared without a keyword, making it a global variable. However, it can be reassigned within this block scope.
}

city="Chicago"; // This is valid because 'city' is a global variable and can be reassigned.

{
    let state="MH"; // This is valid because 'state' is declared with 'let' and can be reassigned within this block scope.

}
state="CA"; // This will throw an error because 'state' is declared with 'let' and is not accessible outside the block scope.

{
    var country="USA"; // This is valid because 'country' is declared with 'var' and can be reassigned within this block scope.
}
country="Canada"; // This is valid because 'country' is declared with 'var' and is accessible outside the block scope.

console.log(typeof null); // This will output 'object' because in JavaScript, the type of null is considered an object.

console.log(typeof undefined); // This will output 'undefined' because undefined is a primitive type in JavaScript.

