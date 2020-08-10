/*----- ES6 system ------*/
class Person{
    constructor(firstName, lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person('Hero','Ahmed',20000);
console.log(heroPerson);//output->> Person { firstName: 'Hero', lastName: 'Ahmed', salary: 20000 }

const friendlyPerson = new Person('Tania','Ahmed',26000);
console.log(friendlyPerson);//output->> Person { firstName: 'Tania', lastName: 'Ahmed', salary: 26000 }


/*----- old system ------*/
function Person1(firstName, lastName,salary){//using function class created
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new Person1('Grand','Papa',1000);
console.log(oldPerson);//output->> Person1 { firstName: 'Grand', lastName: 'Papa', salary: 1000 }