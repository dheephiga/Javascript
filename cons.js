// const pi = 3.14;
// let r,circum;

// r = window.prompt("Radius: ");
// r = (Number(r));
// console.log(circum = r * pi);

// let a = 4.46;

//a = Math.floor(a); //lower
//console.log(a);
//a = Math.ceil(a); //higher
//a = Math.max(a,5);
//a = Math.pow(a,2);
//a = Math.abs(a);
//a = Math.round(a)
// console.log(a);

// a = Math.PI;
// console.log(a);

//hypotenuse - finding c = sqrt(a)
document.getElementById("calculate").onclick = function()
{
let a = document.getElementById("avalue");
a = Number(a);
let b = document.getElementById("bvalue")
b = Number(b);
let c = (Math.sqrt(((Math.pow(a,2)) + (Math.pow(b,2)))));
}