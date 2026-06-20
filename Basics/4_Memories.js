// Datatypes - 1. Primitive 2. Non-primitive

//1. Primitive (STACK MEMORY) : String, Number, BigInt, Symbol, NUll, Undefined, Boolean
//2. Non-Primi (HEAP MEMORY) : Function , Object, Arrays

//Primtive -  ye call back values hoti hai, means u dont refer here, u directly copy the value
//Non-Primi - Idhr we give refer, refernce use karke chnge karo value

//STACK - Jo bhi varibale declare karte hai toh uski copy milti hai
//HEAP - reference milta hai, jo bhi value chnge karenge usko refernce milta hai aur change hota hai

let user1 = {
    email : "Xyz@gmail.com",
    age : 24
}

let user2 = user1

user2.age = 21

console.log(user1.age);
console.log(user2.age);

