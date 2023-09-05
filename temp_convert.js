document.getElementById("submitButton").onclick = function()
{
    let temp = document.getElementById("temp").value;
  //  let choice = document.getElementById()
    if(document.getElementById("cButton").checked)
    {
        let temp = document.getElementById("temp").value;
        document.getElementById("result").innerHTML= (temp-32)*(5/9);
    }

    else if(document.getElementById("fButton").checked)
    {
        let temp = document.getElementById("temp").value;
        document.getElementById("result").innerHTML= (temp*(9/5))+32;
    }
    else
    {
        document.getElementById("result").innerHTML= "select a unit";
    }
}