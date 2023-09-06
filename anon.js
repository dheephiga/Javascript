//function without a name

 let count = 0;

// function increaseCount()
// {
//     count++;
//     document.getElementById("myLabel").innerHTML=count;
// }

// function decreaseCount()
// {
//     count--;
//     document.getElementById("myLabel").innerHTML=count;
// }

document.getElementById("decreaseButton").onclick = function()
{
    count--;
  document.getElementById("myLabel").innerHTML=count;
}

document.getElementById("increaseButton").onclick = function(){
    count++;
    document.getElementById("myLabel"),innerHTML =count;
}