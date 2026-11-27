const arr=[1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[arr.length-1]);

let newarr=[1,2,3,4,5];
newarr.push(6);
console.log(newarr);

newarr.pop();
console.log(newarr);

newarr.unshift(0);
console.log(newarr);

newarr.shift();
console.log(newarr);

const index=newarr.indexOf(3);
console.log(index);

const sliced=newarr.slice(1, 4);
console.log(sliced);
console.log(newarr);//slice does not modify the original array, it returns a new array with the selected elements

//const spliced=newarr.splice(1, 4);
//console.log(spliced);
//console.log(newarr);//splice remove elements from the original array and returns them as a new array

const arraystring=newarr.join(", ");
console.log(arraystring);
console.log(typeof arraystring);

const heroes=["Superman", "Batman"];

const newHeroes=heroes.concat("Wonder Woman", "Flash");
console.log(newHeroes);
console.log(heroes);//concat does not modify the original array, it returns a new array with the added elements

console.log(heroes.push(newHeroes));

console.log(heroes);

console.log(Array.isArray("jyoti"));

console.log(Array.from("jyoti"));

console.log(Array.from({name: "jyoti", age: 20}));//empty array because the object is not iterable

const num1=30;
const num2=20;
const num3=10;

console.log(Array.of(num1, num2, num3));

const numbers=[1, 2, 3, 4, 5];
const numbers2=[6, 7, 8, 9, 10];
//const combinedNumbers=[...numbers, ...numbers2];
//console.log(combinedNumbers);

console.log(numbers.push(numbers2));//push adds the entire array as a single element to the end of the original array

console.log(numbers);
console.log(numbers.length)




