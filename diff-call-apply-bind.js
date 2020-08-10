const normalPerson = {
    firstName: 'X',
    lastName: 'Ahmed',
    salary: 1500,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}
const friendlyPerson = {
    firstName: 'Tanzim',
    lastName: 'Ahmed',
    salary: 10000
}
/* 
heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(3000);
console.log("heroPerson's salary", heroPerson.salary);//output ->> 20000
console.log(typeof(heroChargeBill));//output ->>function
*/

normalPerson.chargeBill.call(heroPerson, 4000,400,40);//output ->> { firstName: 'Hero', lastName: 'Balam', salary: 25000 }
console.log("heroPerson's salary", heroPerson.salary)//output ->> heroPerson's salary 20560

normalPerson.chargeBill.apply(heroPerson,[ 4000,400,40]);//output ->>{ firstName: 'Hero', lastName: 'Balam', salary: 20560 }
console.log("heroPerson's salary", heroPerson.salary)//output ->>heroPerson's salary 16120

/*
note:
    bind return a function
    bind will reuse the object method again & again using created function(example-heroChargeBill).
    The bind() method creates a new function that, when called, has its this keyword set to the provided value
    
    The call() method calls a function with a given this value and arguments provided individually using comma separation.
    The apply() method calls a function with a given this value, and arguments provided as an array 
*/ 
