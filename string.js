/* const name =`arjun`;
const repocount = 48;

// modern way to get output 

console.log(`hii Im ${name} and my repo is ${repocount}`);*/


const gameName = new String('arjun')
// console.log(gameName);

// console.log(gameName[4]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf(`r`));

// const newString = gameName.substring(0,4)

// console.log(newString);

// const anotherString = gameName.slice(-9,2)
// console.log(anotherString);

const newStringOne ="  arjun   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://arjun.com/arjun%20.com"

console.log(url.replace(`%20`,`-`));

console.log(url.includes(`arjun`))