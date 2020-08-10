/*------1st example----
function add(num1, num2) {
    var result = num1 + num2;
    console.log('result inside', result);// output->> result inside 24
    return result;
}
console.log('result outside', result); //output->> result is not defined
// here result is a scope variable & cannot access it globally

var sum = add(12, 12);
console.log(sum);// output->> 24

* /

/*  ------ 2nd example ----*/
var name = "Katrina"; // here name is a global variable
function add(num1, num2) {
    var result = num1 + num2;
    console.log('name inside', name); //output->>  name inside Katrina
    function double(num){
        return num*2;
    }
    var total = double(result);
    return total;
}
console.log('name outside', name);//output->>  name outside Katrina

var sum = add(12, 12);
console.log(sum);
console.log('result outside', result);