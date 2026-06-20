//primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt (Ye call back values hoti hai, mtlb refernce copy nhi kiya jata, puri value copy ki jaati hai)

//reference (Non Primitive) //Reference use kiya jaata hai.
//Array, Objects, Functions 

"use strict"  //treat all js code as newer version

// alert(3+3)  // we r using node.js, not browser

//datatypes 
//number => 2 to power 53
// BigInt
// String => ""
// Boolean => true/false
// null => standalone value
// undefined => not assigned any value
// symbol => for finding unique-ness


//object 

console.log(typeof "age");
console.log(typeof age);

console.log(typeof undefined); // undefined
console.log(typeof null);   //object

//Symbol 
const id = Symbol('123');
const id2 = Symbol('123'); 
//value of id and id2 are not same here
console.log(id === id2);  //false

//++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive) -  variable declare karte hai toh uski copy milti hai.

//Heap - (Non-Primi) - refernce milta hai, orginal value me chnge hoga referece se.