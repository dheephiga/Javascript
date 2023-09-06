// let t = sum(2,3);
// disp(t);
// dispDOM(t); function passed as arg to another function

//if callback is used

sum(2,2,dispDOM);

function sum(a,b,callback){
    let r = a+b;
    callback(r);
}

function disp(output)
{
    console.log(output);
}

function dispDOM(output)
{
    document.getElementById("myLabel").innerHTML = output;
}