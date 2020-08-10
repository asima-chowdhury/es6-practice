const normalPerson = {
    firstName: 'X',
    lastName: 'Ahmed',
    salary: 1500,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}
//chargeBill(1000);// output ->> ReferenceError: chargeBill is not defined
console.log(normalPerson);
/*
   output ->>{
                firstName: 'X',
                lastName: 'Ahmed',
                salary: 1500,
                getFullName: [Function: getFullName],
                chargeBill: [Function: chargeBill]
            }
*/
normalPerson.chargeBill(1000);
console.log(normalPerson.firstName); //output ->> X
console.log(normalPerson.salary);//output ->> 500