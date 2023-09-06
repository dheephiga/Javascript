let fruits = ["apple","mango","guava","orange"];

fruits[0] = "papaya";
console.log(fruits);
fruits.push("lemon"); //adds to the end
console.log(fruits[2]);
console.log(fruits);
fruits.pop(); //delete last element 
console.log(fruits);

fruits.unshift("strawberry"); //adds to the beginning
console.log(fruits);

fruits.shift(); //removes beginning
console.log(fruits);

console.log(fruits.length);

console.log(fruits.indexOf("orange"));

console.log(fruits.indexOf("lemon"));