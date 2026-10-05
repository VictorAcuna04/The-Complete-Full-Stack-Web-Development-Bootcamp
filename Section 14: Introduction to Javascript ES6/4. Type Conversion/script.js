// By default, age is a string so we need to convert it to a number using the Number() function
let age = prompt("How old are you?");
age = Number(age);
age = age + 1;
console.log(age, typeof age);

let x = "pizza";
let y = "pizza";
let z = "pizza";
let a = "";

x = Number(x); // Convert to number
y = String(y); // Convert to string
z = Boolean(z); // Convert to boolean
a = Boolean(a); // Convert to boolean

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); // As long as some value is in it, it will return true
console.log(a, typeof a); // Empty string, so return false
