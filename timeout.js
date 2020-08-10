/*
console.log(2222);
console.log(3333);
console.log(4444);
*/

function doSomething() {
    console.log(3333);
}
console.log(2222);

/*
doSomething();
setTimeout(doSomething); //single parameter : setTimeout (functionName)
setTimeout(doSomething,1000); //double parameter : setTimeout (functionName, time in millisecond)
*/
/*
output->>
    2222
    4444
    3333 // after all execution of code then setTimeout will execute
 */
/*---- setTimeout using function  -----*/
setTimeout(function () {
    console.log('lazy and waiting');
}, 1000)

/*---- setTimeout using arrow function  -----*/
setTimeout(() => {
    console.log('see you later');
}, 1000)

console.log(4444);

/*1000 millisecond = 1second*/

/*---- setInterval using function  -----*/
setInterval(function(){
    console.log('doing it');// setInterval will execute after every 1 second
},1000) 