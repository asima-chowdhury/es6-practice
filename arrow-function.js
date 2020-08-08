/*
function doubleIt(num){
    return num * 2;
}
const result = doubleIt(2);
console.log(result);*/

/*----- using function declaration------*/
/*
const doubleIt = function(num){
    return num * 2;
}
const result = doubleIt(2);
console.log(result);*/

/*----- using arrow function ------*/
const doubleIt = num => num * 2; //parameter - (num) then enter into body - (=>) then return part - (num * 2)
const result = doubleIt(4);
console.log(result);

/*------ for multiple parameter in arrow function ----*/
const add = (x, y) => x + y;
const result1 = add(10, 20);
console.log(result1);

/*------ single line function ---*/
const squareIt = num => num * num; // two parameter
const sub = (x, y) => x - y; // one parameter
const give5 = () => 5; // zero parameter

const result2 = squareIt(10);
const result3 = sub(20, 10);
const result4 = give5(); 

console.log(result2);
console.log(result3);
console.log(result4);

/*------ Multiple line function ---*/
const doMath = (x,y) =>{
    const sum = x+y;
    const diff = x-y;
    const result5 = sum * diff;
    return result5;
}
const result5 = doMath (7,5);
console.log(result5);