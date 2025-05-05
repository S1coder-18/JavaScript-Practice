
// Explain Hositing in Js with example -----

/**
 * Hositing in js is a mechanism where variable and functions declaration are moved (hoisted) to the top of 
 * there containing scope during the compile phase.
 */

//Variable declaration(using var) --> is hoisted, but not initializations.
// The value of the variable is undefined, if accessed before initialization.

console.log(x);
var x = "Sachin";

//Variable declaration(using let and const) --> are hoisted, but not initialization.
// Accessing them results in ReferenceError until the actual declaration is encountered.

console.log(a);  //ReferenceError: Cannot access 'a' before initialization
let a = "Raj";    

console.log(b);  //ReferenceError: Cannot access 'b' before initialization
const b = "Harshita";


//Funtion Declaration --> Both functions declaration and defintion fully hoisted.

foo(); // Output --> Fully Hoisted!.

function foo(){
    console.log("Fully Hoisted!.");
}

// Function Expressions(var) --> is hoisted, but not initializataion. If we will try to access then
// It will give undefined. 

console.log(greet); //Undefined -- It behaves like variable as we store the function in a variable.

var greet = function(){
    console.log("Function Expressions!.");
}

//Instead of var , If we use let or const it will give referenceError.

console.log(greet); //ReferenceError: Cannot access 'greet' before initialization, same for const.

let greet = function(){
    console.log("Function Expressions!.");
}


//Class declarations --> are hoisted but not initialization. If we try to access them then it will
// give ReferenceError.

const user = new person(); //ReferenceError: Cannot access 'person' before initialization

class person {
    constructor(){
        console.log("class Declarations!.");
    }
}

/**
 * The class declaration is hoisted to the top of the scope.
 * But it's placed in the Temporal Dead Zone (TDZ) — the time between entering 
 * the scope and executing the declaration.
 * Accessing the class before it's evaluated results in a ReferenceError, just like let and const.
 */

//Import Declarations --> are fully hoisted and side effects of importing module are excuted 
// before the rest of the code.

