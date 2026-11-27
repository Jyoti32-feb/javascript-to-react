const name ="jyoti";
console.log(typeof name);
console.log(name);

const gamename=new String("cricket");
console.log(typeof gamename);
console.log(gamename);

console.log(name===gamename);

console.log(gamename[0]);

console.log(`My name is ${name} and I like to play ${gamename}`);

console.log(gamename.length);

console.log(gamename.__proto__);

const str=" Hello World ";

console.log(str.trim());

const newstr=str.slice(-6,8);

console.log(newstr);

console.log(str.split(" "));

console.log(str.charAt(1));

console.log(str.indexOf("o"));

console.log(str.substring(0,5));

const url="https://www.google.com/search?q=javascript+basics";

console.log(url.replace("https://www.google.com/search?q=",""));

