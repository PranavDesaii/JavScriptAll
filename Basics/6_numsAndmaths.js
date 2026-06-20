//NUMBER: 
const num = 4
console.log(num); // ye js ne maan liya ki number hai

const num1 = new Number(400) // ye humne bata diya, ye number hi hai
console.log(num1);

console.log(num1.toString().length); 
console.log(num1.toFixed(2)); // decimal point dikhata hai

const num2 = 459.6953
console.log(num2.toPrecision(3)); //jitne number chahiye


const num3 = 10000000
console.log(num3.toLocaleString()); //10,000,000 - american dollars kind
console.log(num3.toLocaleString('en-IN')); // indian rs jaisa


//++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  // minus value +ve ho jayegi

console.log(Math.round(4.6)); // normal round off 
console.log(Math.ceil(4.2)); // upr ki value use krni hai, (5)
console.log(Math.floor(4.6)); // niche ki hi value use karni hai (4)

console.log(Math.random());  // will give the random value between 0-10
console.log(Math.random()*10+ 1); 
console.log((Math.random()*10)+ 1);


console.log(Math.max(3,5,7,1,9));
console.log(Math.min(3,5,7,1,9));

const min = 10
const max = 20
console.log((Math.random() * (max-min +1) ) + min);
 

