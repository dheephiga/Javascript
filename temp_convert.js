document.getElementById("submitButton").onclick = function()
{
    let temp = document.getElementById("temp").value;
  //  let choice = document.getElementById()
    if(document.getElementById("cButton").checked)
    {
        let temp = document.getElementById("temp").value;
        document.getElementById("result").innerHTML= (temp-32)*(5/9) + "°C";
    }

    else if(document.getElementById("fButton").checked)
    {
        let temp = document.getElementById("temp").value;
        // document.getElementById("result").innerHTML= (temp*(9/5))+32;
        document.getElementById("result").innerHTML = faren(temp) + "°F";
    }
    else
    {
        document.getElementById("result").innerHTML= "select a unit";
    }
}

function faren(temp)
{
    return (temp*(9/5) + 32);
}