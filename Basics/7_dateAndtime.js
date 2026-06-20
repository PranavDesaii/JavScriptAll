//Dates - date is obj in js

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

////
let myCreateDate = new Date(2026,1, 16)  // yyyy mm dd
console.log(myCreateDate.toDateString());


let myCreateDate1 = new Date("06-20-2026")
console.log(myCreateDate1.toLocaleString());
console.log(myCreateDate1.getTime());



let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000)); // for seconds


let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());

newdate.toLocaleString('default', {
    weekday: "long",
    

})