let fruits = ["apple","mango","guava","orange"];

fruits[0] = "papaya";
console.log(fruits);
fruits.push("lemon");          //adds to the end
console.log(fruits[2]);
console.log(fruits);
fruits.pop();                  //delete last element 
console.log(fruits);

fruits.unshift("strawberry"); //adds to the beginning
console.log(fruits);

fruits.shift();              //removes beginning
console.log(fruits);

console.log(fruits.length);

console.log(fruits.indexOf("orange"));

console.log(fruits.indexOf("lemon")); 

//loop through

let prices = [12,52,12.36,45.69,78.00];

for(let i =0;i<prices.length;i++)
    console.log(prices[i])

console.log("reverse");

for(let i =prices.length-1;i>=0;i--)
    console.log(prices[i]);

for(let i of prices)
    console.log(i);

//array sorting
fruits = fruits.sort();
console.log(fruits);

//reverser sorting
fruits = fruits.sort().reverse();
for(let fruit of fruits)
    console.log(fruit)