
/**
 * Closure --> Closure when function remembers it's lexical scope even when the function is excuted 
 * outside of its lexical scope.
 * 
 * Key Points ---->
 * 1. Closure occures when inner function has the access to the outer scope(lexical) variables, 
 *    Even when the outer function finished executing.
 * 2. Closure allows the functions to remember the enviornment, In which it was created
 *    Even if that enviornment is no longer present.
 * 3. Closure are used in js extensively, With callbacks, event handlers and asynchronous operations.
 */

//For Example --> 

function outerFunc(){
    var name = "Sachin Gupta";

    function innerFunc(){
        console.log(name);
    }

    return innerFunc;
}

let inner = outerFunc(); //inner holds the reference to 'innerfunc'.
inner(); //Outside of inner function.
// outer function is excuted, still inner has the access to the variable which defined inside 'outerFunc'.