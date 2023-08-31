document.getElementById("myButton").onclick = function()
{
    const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
    if(document.getElementById("check").checked)
        console.log("Subscribed");

    else
    console.log("Not subscribed");

    if(visa.checked)
    console.log("You are paying with visa card");

    else if(mastercard.checked)
    console.log("You are using mastercard");

    else if(paypal.checked)
    console.log("You are using paypal");

    else 
    console.log("use a valid method");
}



