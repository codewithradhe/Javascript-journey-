//stack (primitive) when we delvare varibale we got copy in output
//heap (non-primitive) when we delvare varibale we got refernce

let myYoutubename ="aryhs.com"

let anthogername = myYoutubename
anthogername ='codewithradhe'

console.log(myYoutubename);
console.log(anthogername);

let userone ={
    email: `arjun@gmail.com`,
    upi: 4654,

};

let usertwo =userone

usertwo.email ="radhe@gmail.com";
console.log(userone);
console.log(usertwo);