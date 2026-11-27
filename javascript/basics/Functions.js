// function greeting(name) {
//     if(name===undefined){
//         console.log("please provide a name");
//         return;
//     }
//     console.log(`Hello ${name}`);
// }

// //console.log(greeting("jyoti"));

// console.log(greeting());


// function simulate(num1,...args) {
//     return args
// };

// console.log(simulate(1, 2, 3, 4, 5));//resrt operator is used to collect the remaining arguments into an array

// function handleobject(anyobj){
//     console.log(`hey my name is ${anyobj.name} and my age is ${anyobj.age}`);
// }

// const obj={name:"jyoti", age:20};
// const reference=handleobject(obj);

// console.log(reference);//undefined because the function does not return anything, it only logs to the console

// console.log(handleobject({name:"sakshi", age:18}));

// function getarray(arr){
//     console.log(`the first element is ${arr[0]} and the last element is ${arr[arr.length-1]}`);
// }

// getarray([1, 2, 3, 4, 5]);

// function greeting2(name="Guest"){
//     console.log(`Hello ${name}`);
// }

// greeting2(); // Calls the function with the default parameter


// console.log(one(5));//6//hoisting
// function one(num){
//     return num+1;
// }


// console.log(two(4));//error because you hold function reference in variable 
// const two=function(num){
//     return num+2;
// }


const obj1={
    name:"jyoti",
    age:25,
    welcome(){
        console.log(`hey ${this.name}, welcome to website`);
        console.log(this)
    }
    

}

//obj1.welcome();

obj1.name="sakshi";
//obj1.welcome();

//obj1.welcome(this);//refers to current context

console.log(this);//{}

const func=function(){
    console.log(this);//print info about global object 
}

//func();

function greet4(){
    console.log(this);
}
//greet4();

const namste=()=>{
    console.log(this);
}

namste();

const sum=(num1,num2)=>num1+num2;
console.log(sum(3,3));//implicit return

const addition=(num1,num2)=>{
    return num1+num2;//explicit return
}
console.log(addition(12,2));

const returnobj=()=>({name:"jyoti",age:26});
console.log(returnobj());

(function wel(){
    console.log("welcome to india");
})();

((naam)=>{
    console.log(`hello ..how are you ${naam}`);
})("jyoti");