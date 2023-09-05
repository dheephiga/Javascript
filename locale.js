let myNum = 123456.8789;
let myPercent= .101;

let myDegree = 89;
// myNum = myNum.toLocaleString("en-US",{style:"currency",currency:"USD"});

// myNum = myNum.toLocaleString("hi-IN",{style:"currency",currency:"INR"});

// myNum = myNum.toLocaleString("de-DE",{style:"currency",currency:"EUR"});

//myPercent = myPercent.toLocaleString(undefined, {style:"percent"})

myDegree = myDegree.toLocaleString(undefined,{style:"unit",unit:"celsius"})
//console.log(myPercent);

console.log(myDegree);