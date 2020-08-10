const normalPerson = {
    firstName: 'X',
    lastName: 'Ahmed',
    salary: 1500,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
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

normalPerson.chargeBill(1000);
console.log("normalPerson's FirstName", normalPerson.firstName); //output ->> X
console.log("normalPerson's salary", normalPerson.salary);//output ->> 500

heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log("heroPerson's salary", heroPerson.salary);//output ->> 20000
console.log("normalPerson's salary", normalPerson.salary);//output ->> 500

friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1000);
console.log("friendlyPerson's salary", friendlyPerson.salary);//output ->> 9000
console.log(typeof(heroChargeBill));//output ->>function
