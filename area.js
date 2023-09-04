let a,w,h;

w = window.prompt("width: ");
h = window.prompt("height: ");

a = getArea(w,h);

console.log("Area is ",a);
function getArea (w,h)
{
    return w*h;
}