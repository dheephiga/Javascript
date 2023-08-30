console.log("this will print the code in to the console tab of the browser");

window.alert("POPUP MESSAGE"); // this will show a alert popup in the browser

let age =21;
let fname = "John";
let lname = "Doe";
let check = true;
console.log(age); 
console.log(fname+ " " +lname);

document.getElementById("p1").innerHTML = "Hello " + fname+ ", " + lname;
document.getElementById("p2").innerHTML = "You are " + age;
document.getElementById("p3").innerHTML = "Enrolled: " + check;

let studs = 20;
studs++;
studs+=10;
studs-=17;
studs*=4;
studs%=2;

document.getElementById("p4").innerHTML = "studs: " + studs;

//getting input from html and using it
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " +username;
}

//type conversion

