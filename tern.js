let age = 87;

console.log(checkAge(age));

function checkAge(age)
{
    //age >= 18 ? console.log("true") : console.log("false");
    return age >= 18 ?true : false;
}

let win = false;
//console.log(checkWin(win));
checkWin(win);
function checkWin(win){
    win ? console.log("You won") : console.log("Better Luck Next time");
}