//indefinite amount of parameters

let a = 3;
let b = 8;
let c =3;
let x = 2;

console.log(sum(a,b,c,x));

function sum(...num)
{
    let t =0;
    for(let n of num)
        t+=n;
    return t;
}