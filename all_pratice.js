// const profilName = `arjun`;
// const Age = 24;
// const qualification = `MBA & Web Developer`;

// // console.table([profilName,Age,qualification]);

// console.log(`Hi this is ${profilName}, I'm ${Age}old, and my ${qualification}, Thank you`);

// const str1 = new String  (`harimaala`);

// const str2 = new String  (`harimaala`);

// console.log(str1 === str2);

// var name = `Arjun Vishwakarma`.length;
// var name = `Arjun Vishwakarma`.substring(0,10);
// var name = `Arjun Vishwakarma`.indexOf('')// this string will get to khow the word postion (indexOf() returns the position of the first occurrence of a value in a string.)
// console.log(name);
// var sex = `male`.charAt(3);

// console.log(name);
// console.log(sex);

// let a = `a`;
// let b = `B`;
// if (a > b) {
//   console.log(`${a} is Greater Than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is less Than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal`);
// }
// string primitive
// const message = `hi`;
// console.log(typeof message);
// console.log(message.length)
// // string object

// const another = new String(`hi`)
// console.log(typeof another);

// var text = `Arjun Vishwakarma`;
// var result = text.substring(1,10);

// console.log(result);

// const name =`arjun`;
// const result = name;

// console.log(result.charAt(1));

// let str1 ="Arjun Vishwakarma";
// let str2 ="Radhe Arya"

// let result = function areEqualCaseInsensitive() {
//   return str1.toUpperCase === str2.toLowerCase
// }

// console.log(result);

// let text = `arjun`;
// let result = text.valueOf();
// console.log(result);let result = text.valueOf() is the same as let result = text

// let text = `  lorem the base    `;
// let result = text.trim()
// console.log(result);
// The trimStart() method removes whitespace from the beginning of a string.
// The trimStart() method does not change the original string.
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.



// let text = " `    i'm web developer      gfgffgf      `   ";
// let result = text.trimEnd()
// console.log(result);
// The trimEnd() method removes whitespace from the end of a string.
// The trimEnd() method does not change the original string.
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.


// let text = `   im web developer    `;
// let result = text.trim()
// console.log(result); trim() removes whitespace from both sides of a string




// let text = `im web developer`;
// let result = text.replace(`im `,'yes u r ')
// console.log(result); The replace() method expects two arguments: the substring to replace and the new substring.



// let text = `arjun vishwakarma`;
// let result = text.toUpperCase();
// console.log(result);



// let text = `ARJUN VISHWAKARMA`;
// let result = text.toLowerCase()
// console.log(result);



// let text = `im web devloper`
// let result =text.toLocaleUpperCase()
// console.log(result);


// let text = `im web developer`;
// let result = text.startsWith('im');
// console.log(result); tartsWith() returns true if a string starts with a specified string


// let text = `im web developer`
// let result =text.split("")
// console.log(result);split() splits a string into an array of substrings, and returns the array
// output: of ("")[
//   'i', 'm', ' ', 'w',
//   'e', 'b', ' ', 'd',
//   'e', 'v', 'e', 'l',
//   'o', 'p', 'e', 'r'
// ]
// of (" ") [ 'im', 'web', 'developer' ]




// let text = `im web developer`;
// let result = text.slice(0,5)
// console.log(result);slice() extracts a part of a string and returns the extracted part



// let text = `mr Arjun is web developer`;
// let position = text.search("Arjun")
// console.log(position);searches a string for a value and returns the position of the first match


// let text = "I love cats. Cats are very easy to love. Cats are very popular.";
// let replace = text.replaceAll(`cats`,`Dogs`)
// console.log(replace);ES2021 intoduced the string method replaceAll()

// let text = "Hello world!";
// let result = text.repeat(2);
// console.log(result);repeat() returns a new string with a number of copies of a string


// let text ="The rain in SPAIN stays mainly in the plain"
// let result =text.match(`PAI`);
// console.log(result);



// let text ="The rain in SPAIN stays mainly in the plain";
// let result = text.includes(`rain`)
// console.log(result);
// The includes() method returns true if a string contains a specified string.

// Otherwise it returns false.

// The includes() method is case sensitive.

// let text = `hello world!`;
// let result= text.endsWith(`!`)
// console.log(result);
// The endsWith() method returns true if a string ends with a specified string.

// Otherwise it returns false.

// let text1 = "sea";
// let text2 = " food";
// let result = text1.concat( text2);
// console.log(result);The concat() method joins two or more strings.

