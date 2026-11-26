let number=1234568901567n;
console.log(typeof number);
console.log(number);

let id=Symbol("id");
console.log(typeof id);
console.log(id);

let anotherId=Symbol("id");
console.log(id===anotherId);

let isStudent=true;

let isanotherStudent=isStudent;
console.log(isanotherStudent);

isanotherStudent=false;
console.log(isStudent);
console.log(isanotherStudent);

const student={
    name:"John",
    age:30,
    isStudent:true
};

const anotherStudent=student;
console.log(student.name);

anotherStudent.name="Jane";
console.log(student.name);
console.log(anotherStudent.name);