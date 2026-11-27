const date=new Date();

console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

const currentDate=new Date(2026, 0, 1); // January 1, 2026
console.log(currentDate.toDateString());

const specificDate=new Date(2026, 11, 25, 10, 30, 0); // December 25, 2026 at 10:30:00
console.log(specificDate.toLocaleString());

const newdate=new Date("2026-12-25"); 
console.log(newdate.toDateString());

const timestamp=new Date(1700000000000); // Timestamp in milliseconds
console.log(timestamp/1000000); 

const dateString="11-11-2011"; // ISO 8601 format
console.log(dateString);

