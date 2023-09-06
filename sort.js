let grades = [67,76,87,98,56];
grades = grades.sort(desc);

grades.forEach(print);

function desc(x,y)
{
    return y - x;
}