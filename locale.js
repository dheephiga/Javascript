let myNum = 123456.8789;
// myNum = myNum.toLocaleString("en-US",{style:"currency",currency:"USD"});

// myNum = myNum.toLocaleString("hi-IN",{style:"currency",currency:"INR"});

// myNum = myNum.toLocaleString("de-DE",{style:"currency",currency:"EUR"});

myNum = myNum.toLocaleString(undefined, {style:"percent"})

console.log(myNum);