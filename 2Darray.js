let fruits = ["apples","kiwis","guavas"];

let veggies = ["onion","tomato","potato","beans"];

let meats = ["chicken","fish"];

let groceryList = [fruits,veggies,meats];

console.log(groceryList);

for(let list of groceryList)
{
    for(let item of list)
    {
        console.log(item);
    }
}

groceryList[2][2] = "eggs";

console.log(meats);