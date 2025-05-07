
//What is destructuring in js?
/**
 * Destructuring --> is a powerful feature in js by which we can unpack the values of array & objects 
 *                   into single variables.
 * Benefits of Destructuring -->
 *                              1. To write more cleaner code, we use destructuring.
 *                              2. When accessing multiple properties, destructuring 
 *                                 avoids repeating the object name multiple times.
 */

//Example of Array Destructuring --> 

let arr = [1,2,3];
let [a,b,c] = arr;
console.log(b,c,a); //2,3,1

//Also we cn skip the value -->

let [x, ,z] = arr;
console.log(x,z); //1,3

//We can use rest as well -->

let [firstVal, ...Rest] = [12,3,4,5];

console.log(firstVal, Rest);   // 12 [3,4,5]

//---------------------------------------------------------------------------------------------------

//Object Destructuring --> 

let obj ={
    name:"Sachin",
    age:23
}

let {name, age} = obj;
console.log(age); //23 
console.log(name); //Sachin

//Now, If we will do in this then what will happen ?

let {name1, age1} = obj;
console.log(age1); //undefined
console.log(name1); //undefined
/**
 * You know why, It will give undefined coz destructuring works only with actual property name 
 * which existing the object itself.
 * But in this case, name1 and age1 doesn't exists in the object.
 * Instead of this, We can rename them and then it will work properly 
 */

let {name:name2, age:age2} = obj;
console.log(age2); //23
console.log(name2); //sachin

//we can use rest also here 

user = {
    Role:"Developer",
    Exp:'3-years'
}

let {Role, ...rest} = user;
console.log(Role, rest);  // Developer { Exp: '3-years' }


/**
 * Now we should get the question, In array we freely use the any variable name then why we can't use
 * in object ?
 * 
 * 1. In array destructuring, variables are just positions.
 * 2. Array destructuring based on index, not key names.
 * 3. So we can use any variable names, coz we are pulling values by position.
 * 
 * And Object destructuring works by matchening the property name or we can rename the property name.
 */

//What is the difference between array and object destructuring?

/**
 * Array Destructuring --> 1. Based on the position, not key names.
 *                         2. So we can use any variable names to pull the values.
 * 
 * Object Destructuring -->1. Based on the key names, not index.
 *                         2. We have to use only the existing property in object destructuring.
 *                         3. Or we have to rename the existing property then we can pull the values.
 */

//--------------------------------------------------

//Nested object Destructuring -->

let developer ={
    devName1:"Raj",
    address:{
        city:"Umaria",
        MoNumber:9993766768
    }
}

let {address:{city, MoNumber}} = developer;
console.log(city, MoNumber); // Umaria 9993766768



//Nested Array Destructuring -->

let nums = [1,[3,4],5];
let [m,[n,o],...num] = nums;
console.log(m,n,o,num); //1,3,4 [5]