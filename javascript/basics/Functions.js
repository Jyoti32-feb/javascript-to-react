function greeting(name) {
    if(undefined){
        console.log("please provide a name");
        return;
    }
    console.log(`Hello ${name}`);
}

//console.log(greeting("jyoti"));

console.log(greeting());


function simulate(num1,...args) {
    return args
};

console.log(simulate(1, 2, 3, 4, 5));

function handleobject(anyobj){
    console.log(`hey my name is ${anyobj.name} and my age is ${anyobj.age}`);
}

const obj={name:"jyoti", age:20};
const reference=handleobject(obj);

console.log(reference);//undefined because the function does not return anything, it only logs to the console

console.log(handleobject({name:"sakshi", age:18}));

function getarray(arr){
    console.log(`the first element is ${arr[0]} and the last element is ${arr[arr.length-1]}`);
}

getarray([1, 2, 3, 4, 5]);

function greeting2(name="Guest"){
    console.log(`Hello ${name}`);
}

greeting2(); // Calls the function with the default parameter