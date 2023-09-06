let fruits = ["apple","mango","guava","orange"];

fruits[0] = "papaya";
//console.log(fruits);
fruits.push("lemon");          //adds to the end
//console.log(fruits[2]);
//console.log(fruits);
fruits.pop();                  //delete last element 
//console.log(fruits);

fruits.unshift("strawberry"); //adds to the beginning
//console.log(fruits);

fruits.shift();              //removes beginning
//console.log(fruits);

//console.log(fruits.length);

//console.log(fruits.indexOf("orange"));

//console.log(fruits.indexOf("lemon")); 

//loop through

let prices = [12,52,12.36,45.69,78.00];

for(let i =0;i<prices.length;i++)
    //console.log(prices[i])

//console.log("reverse");

for(let i =prices.length-1;i>=0;i--)
    //console.log(prices[i]);

for(let i of prices)
    //console.log(i);

//array sorting
fruits = fruits.sort();
//console.log(fruits);

//reverser sorting
fruits = fruits.sort().reverse();
//for(let fruit of fruits)
    //console.log(fruit)

//---------------------------------------------------------------------//
//for each method in arays

fruits.forEach(capitalize);
fruits.forEach(print);
function capitalize (el, index,array)
{
   array[index] = el[0].toUpperCase() + el.substring(1);
}

//console.log(fruits[0]);

// function print(el)
// {
//     console.log(el);
// }


//map - executes provided callback for each array element and creates a new array 

let num = [1,2,3,4,5,6];

num = num.map(cube);
num.forEach(print);

function cube (el)
{
    return Math.pow(el,3);
}


function print(el)
{
    console.log(el);
}

//filter - creates new array with the conditions matched

let ages = [18,15,78,12,45,32,65];
let adults = ages.filter(checkAge);

adults.forEach(print);
function checkAge(el)
{
    return el >= 18;
}

//reduce - reduces to a single value

let c = adults.reduce(sum);
console.log(`Sum is ${c}`);

function sum(el,c)
{
    return c+el;
}