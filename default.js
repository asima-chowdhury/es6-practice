/*
function add(num1, num2) {
    return num1 + num2;
}
// const total = add(15,16);
const total = add(15); //output will be 'NaN' because we didn't provide 2nd parameter value
console.log(total);
*/


/* -----  using if for providing 2nd value as a default ------*/
/* 
function add(num1, num2) {
    if (num2 == undefined) {
        num2 = 0;
    }
    return num1 + num2;
}
const total = add(15);// now 2nd value will be 0 as a default value
console.log(total);
*/

/* -----  using shortcut for providing 2nd value as a default ------*/
/* 
function add(num1, num2) {
    num2 = num2 || 0;
    return num1 + num2;
}
const total = add(15);
console.log(total);
*/
/* -----  using ES6 format for default value----*/
function add(num1, num2 = 20) {
    return num1 + num2;
}
const total = add(15);
console.log(total);
