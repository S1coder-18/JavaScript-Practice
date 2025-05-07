
//How to convert the string into number datatype?

/**
 * In js, There are many ways to convert the string into number.
 * And the most common one's are -->
 *                                  1. Number()
 *                                  2. parseInt()
 *                                  3. parseFloat() 
 */

//For example , Using Number() method -->

let x = "123";
let y = Number(x); 
console.log(typeof y); //number

//For Example, Using + operator-->

let z = +x;
console.log(typeof z); //number

//For example, Using parseInt() -->

let a = parseInt(x);
console.log(typeof a);  //number

//For example, Using parseFloat() -->

let b = parseFloat(x);
console.log(typeof b); //number

// Now here i got question that , can we directly change the x ?
/**
 * No, Because here strings are immutable, So we can reassign the value on it but 
 * we can't change the type of the string into number or to any other datatypes.
 */

// let me give you example -->

console.log(Number(x));
console.log(typeof x); //string only

//Have u seen, We are getting typeof number coz, strings are immutable.
/**
 * Points to remember:
 * 
 * 1. In JavaScript, primitive data types are immutable — their values cannot be changed in place.
 * 2. In JavaScript, when we reassign a variable, a new value is created (for primitives).
 * 3. In JavaScript, we can reassign a variable to a new value of a different type,
 *    but we are not changing the type of the original value — we are just updating the variable.
 */


//For example, If we do this -->

let value = '12';
value = Number(value); 
console.log(typeof value); 

/**
 * Explanation:
 * - Initially, `value` holds the string `'12'`.
 * - When we do `value = Number(value)`, we're creating a new number value (12).
 * - The `value` variable is now reassigned to point to this new number.
 * - The original string `'12'` is no longer referenced and becomes eligible for garbage collection.
 */

