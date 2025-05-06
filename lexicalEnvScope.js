
//What is Lexical Enviornment?

/**
 * Lexcical Enviornment --> is a combination of local memory and reference of lexical enviornment parents.
 * And it is created whenever the execution context is created. 
 */

//For Example -->

function a(){
    var x = 10;
    b();
    function b(){
        console.log(x);  //10
    }
}
a();

// Do you how we are accessing the x inside inner function b?

/**
 * As we know js does to things, 1.Memory allocation phase
 *                               2.Excution phase
 * 
 * When we run the code, Javascript creates the global excution context in which it creates the 
 * memory execution and code block phases.
 * 
 * For function a(), It creates the  memory execution and code block phase 
 * where memory execution context holds the scopes(variables) & reference to it's parents.
 * And for function a() the reference is null.
 * Inside function a(), We have variable x for which it assigns the memory & holds 
 * undefined immediately.
 * 
 * And then for function b(),It creates memory excution and code block phase where 
 * memory execution phase holds the scope(variables) & it's parents reference.
 * And code block holds the code.
 * 
 * During execution phase, Js executes the function a() and then inside function a()
 * we initialize the value 10 to x. 
 * And then executing function b(), Inside function b(), In local scope we try to find the 
 * x variable which is not present, So we will check to it's parent reference function a() 
 * local scope where we will get the variable x. That is called the Scope chaining.
 */


//What is Scope chaining?

/**
 * Scope Chaining --> is the process where js uses to find the variables by searching through nested 
 *                    scope from inner to outer -- until it reaches to global scope.
 *                    Scope chaining happens at runtime.
 * 
 * How it works -------------->
 * 1.Js first looks into the current scope.
 * 2.If not found, It goes to parent scope.
 * 3.This continues to chain up until it reaches the global scope.
 * 4.And if variable is not found, It throws ReferenceError.
 */

//What is Lexical Scoping?

/**
 *What is Lexical Scoping?
 *Lexical scoping (also called static scoping) means that a function's scope is determined by 
 *its location in the source code, and this structure does not change at runtime.
*/

//We know the parent reference but what is that actually, How it looks like?

/**
 * Parent Reference is a lexical enviornment.
 * When js executes the function, It creates Global execution context which holds the 
 * lexical enviornment.
 * 
 * The Lexical Enviornment has ---->
 * 1.Local Enviornment Record --> Stores variable/function declarations.
 * 2.Outer Lexical Enviornment Reference --> A reference to it's parents scope
 * (where function was defined, not called).
 */

function outer() {
    let x = 10;
  
    function inner() {
      let y = 20;
      console.log(x); // Accesses x from outer's lexical environment
    }
  
    inner();
  }
  outer();

/**
 * Inner's Lexical Environment: ----------------------------------------------->
 * 1.Local Enviornment Record :
 * 
 *   y=20
 * 
 * 
 * 2.Outer's  Lexical Enviornment Reference --> Outer's Lexical Enviornment 
 */

/**
 * Outer's Lexical Environment: ------------------------------------------------>
 * 
 * 1.Local Enviornment Record:
 *     x = 10
 * 
 * 2.Outer's Lexical Enviornment Reference --> Global's Lexical Enviornment
 */

//Together they form the 'Lexical Enviornment', Which builds the the 'Scope Chain'.