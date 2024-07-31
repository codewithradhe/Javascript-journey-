//primitive 

//7 types
// 1 string
// 2 number
// 3 boolean
// 4 null
// 5 undefined
// 6 symbol
// 7 Bigint

// Reference (non primitive)
// array
// objects
// function
let name = "arjun"; // String
let number = 45; // number
let loggedIn = true // boolean
let a = null // this is null competely empty
let b // this is undefined
let id = Symbol('123')
let BigNumber = 11166161616141161n

console.table([name , number , loggedIn , a ,b , id , BigNumber]);

const heros = ["shaktiman" ,"naagraj" , "doga"] // arrya
 let myObj = {
    name:"arjun",
    age: 22 ,
};

const myfunction = function name () {
    console.log("hello world");
}
console.log(myfunction);