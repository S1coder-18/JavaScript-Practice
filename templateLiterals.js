

//----------------------------------------------------------------------------------------------------

//What is the template literals in Js?

/**
 * Template literals --> In js, is a feature that allows us to write the multi-line strings with ease.
 *                       We use backticks(`) instead of single or double qoutes for template literals. 
 *                       We can embed expressions using template literals syntax ${expression}.
 */

//For example -->

let Developer = "Sachin Gupta!";
// console.log(`Hello,${Developer}`);    We can do in this way , And in other way as well--
let greetings = `Hello, ${Developer}`;
console.log(greetings);

/**
 * Benefits of using template literals -->
 * 1. We can write the multiline string without single or double qotes.
 * 2. We can directly embed the expression inside ${expression} syntax.
 */

//Example of embeding expressions --> 

let price = 2000;
console.log(`Price for this cloth is ${price/10}!.`); // 200

//Without template literals -->
let devName = "Sachin Gupta";
console.log("The developer Name is "+ devName +"!");

//Using template literals, It is more suitable & easy to write -->

console.log(`The developer Name is ${devName}!.`);
