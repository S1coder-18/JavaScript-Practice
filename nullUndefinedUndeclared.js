
// Difference between Null, Undefined and Undclared --->

//null -->1. null is an assignment value which is assigned by the developer which indicates that 
          //variable points to no object means variable is declared but intentionally assignes to no value.
        //2. Type of null is 'object'.
        //3. When we perform primitive operation then, Then it performs the type corecien based on the 
        // context.... null is falsy value.

//For example --> 

//1. When we perform addition or multiplication or substraction then, It converts into '0'.

console.log(null+5); //5
console.log(null-4); //-4
console.log(null * 3); //0

//2. When we perform addition with string, It converts to string.

console.log(null+"Sachin");

//3. When we perform substraction or multiplication or division with string ,It returns NaN.

console.log(null - "Sachin"); //Nan
console.log(null * "Sachin"); //Nan
console.log(null / "Sachin"); //Nan
console.log(typeof(null));    //object

//-------------------------------------------------------------------------------------------------

//Undefined --> means variable is declared but not yet initialize with the value.
//2. typeof undefined is unefined.

let x;
console.log(x); //undefined
console.log(typeof(x)); //undefined

//3. If we perform addition, multiplication or substraction it converts into Nan and returns Nan.
console.log(undefined+1); //Nan
console.log(x-1); //Nan
console.log(x*1) //Nan

x = 10;
console.log("Harshita"+x); //Harshita10
console.log([1,2]+"Sachin"); //1,2sachin

let a = [2,3,4,5];
console.log(...a +"Arrays"); // 2 3 4 5 s a c h n coz of browsr console we are getting ouput like this.

console.log(a +"Arrays"); // 2 3 4 5sachn

console.log("Sachin" + a); // sachin2 3 4 5

//4. As x is declared, And it is undefined so it converts into string undefined.
console.log("Sachin"+x); //sachinundefined

//5. If we perform conditional operation then it convets into falsy value.
if(undefined){
    console.log("yes");
}else{
    console.log("No");
}

//undclared --> Means yet the variable is not declared at all 
//2. typeof undeclared variable is undefined .
//3. If we try to access undclared variable, then it gives us ReferenceError.

console.log(typeof y); //undefined
// console.log(y);        //ReferenceError: y is not defined
console.log("Sachin"+y); //ReferenceError: y is not defined