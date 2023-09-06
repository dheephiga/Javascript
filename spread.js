//spread operator allows an iterable like an array or string it unpacks those

let nums = [1,2,3,4,5,6,7,8,9];

console.log(...nums);

//to find max
let maxi = Math.max(nums);
console.log(maxi); // you get NaN error

//using spread operator

maxi = Math.max(...nums);
console.log(maxi);

//merging
let c1 = ["dennis","ryan","howard","stuart","smith"];
let c2 = ["alex","haley","luke","amy","penny"];

// c1.push(c2);
// console.log(c1); //nah

c1.push(...c2);
console.log(...c1);