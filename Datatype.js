
// What are the datatypes in java-Script?
/**
 * Datatype is used to tell the type of variable, What type of variable 
*  is defined. For example --> number, string, undefined, etc.
 */

// They are categorized into two types -->
/**
1.Primitive Types --> Primitive types are those types which are provided by js, 
                    They are not derived from other datatypes.
                    1.number --> Is used for both integers and floating points.
                    2.String --> Represents the sequence of characters.
                    3.null   --> variable is declared which points to no object value.
                    4.Boolean--> Represents true and false.
                    5.BigInt --> Represents the integers with arbitary precision.
                    6.Symbol --> A unique and immutable value used as object property keys.
                    7.undefined --> A variable that has been declared but not assigned the value.
 

2.Non-Primitive types -->
                    1.Array --> Used to store the collection of values.
                    2.object--> Used to store the key value pairs.
                    3.map   --> A collection of key-value pair.
                    4.set   --> used to store the unique values.
                    5. Date --> Represents the date and time.
                    6.RegExp --> Represents regular expressions.

*/

// Primitive types store the single values only whereas
// Non-Primitive types store the collection of values.


// ----------------------------------------------------------------------------------------------

// What is mutable and immutable?
/**
Mutable --> means value can be changed after it's creation.
            In js objects, Array and funtion are mutable.
 */
//Arrays Example --> 

let arr = [1,2,3,4];
console.log(arr);   // Before chainging the value 
arr.push(5);
console.log(arr);   // After chainging the value 

//Object Example --> 

let obj = {
    name:"Sachin",
    age:23
}
console.log(obj.age); // Before chainging the value 

obj.age = 25;
console.log(obj.age); // After chainging the value 

//ANd in js, Primitive datatypes are immutable -->

//String example -->

let nam = "Sachin";
console.log(nam); // Before chainging the value 
nam[0] = 'w';
console.log(nam); // After chainging the value (no changes)


//number example --> 

let x = 10;
console.log(x); // Before chainging the value 
x = 20;
console.log(x); // After chainging the value (It got changed)


//But you know still, We have reassigned the value not changed you know why let me give another example

let a = 20;
console.log(a); // 20
let b = a;

a = 30;
console.log(a); //30 we are just overriding the value.
console.log(b); //20  w



/**
 * First case -->So what i want to tell you, That we are just overriding the value and that previous 
 * value is still present temporarily in the memory block.In first example, But as if no variable 
 * will reference to that value then it will be removed from the memory by garbage collector.
 */

/**
 * Second case --> In this case, The new variable b is pointing to the previous value a.
 * So it won't be removed from memory by garbage collector.
 */

// And same case for other datatypes as well like Boolean, Undefined, null, BigInt, etc.
