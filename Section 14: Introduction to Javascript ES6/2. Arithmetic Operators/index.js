let x = 10;
let y = 5;

console.log(`${x} + ${y} = ` + (x+y));
console.log(`${x} - ${y} = ` + (x-y));
console.log(`${x} * ${y} = ` + (x*y));
console.log(`${x} / ${y} = ` + (x/y));
console.log(`${x} % ${y} = ` + (x%y));

document.getElementById("p1").textContent = `${x} + ${y} = ` + (x+y);
document.getElementById("p2").textContent = `${x} - ${y} = ` + (x-y);
document.getElementById("p3").textContent = `${x} * ${y} = ` + (x*y);
document.getElementById("p4").textContent = `${x} / ${y} = ` + (x/y);
document.getElementById("p5").textContent = `${x} % ${y} = ` + (x%y);