
const mysym=Symbol("mysym");
const jsuser={
    name:"John",
    age:30,
    city:"New York",
    isAdmin:true,
    [mysym]:"key",
    Login:function(){
        console.log("User logged in");
    },
    "active":true
}

console.log(jsuser);
console.log(jsuser.name);
console.log(jsuser["active"]);
jsuser.Login();

jsuser.greeting=function(){
    console.log(`hello ${this.name}`);
}

jsuser.greeting();
console.log(jsuser.greeting);
console.log(jsuser.greeting());

console.log(jsuser.mysym);//undefined
console.log(typeof jsuser.mysym);//undefined

console.log(jsuser[mysym]);
console.log(typeof jsuser[mysym]);

console.log(typeof mysym);

console.log(jsuser["mysym"]);//undefined
Object.freeze(jsuser);

jsuser.name="Jane";

console.log(jsuser.name);//John because the object is frozen and cannot be modified

//const user=new Object();//singleton object
const user={};

user.name="jyoti";
user.age=25;
user.city="New Delhi";


console.log(user);

const username={
    fullname:{
        firstname:"jyoti",
        lastname:"pathade"
    }
}

console.log(username.fullname);
console.log(username.fullname.firstname);

const user1={1:"one", 2:"two", 3:"three"};
const user2={4:"four", 5:"five", 6:"six"};

const mergedUser1=Object.assign({}, user1, user2);
console.log(mergedUser1);



const mergedUser={...user1, ...user2};
console.log(mergedUser);

console.log(Object.keys(mergedUser));
console.log(Object.values(mergedUser)); 
console.log(Object.entries(mergedUser));

console.log(Object.hasOwn(mergedUser, 1));

console.log(user.hasOwnProperty("nam"));

const course={
    title:"JavaScript",
    duration:"3 months",
    level:"beginner"
}

course.level="intermediate";

console.log(course.level);

const {level:Stage}=course;
console.log(Stage);
