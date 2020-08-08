/*----- create class -----*/
/*
class Student{
    
}
const student1 = new Student();
const student2 = new Student();
console.log(student1, student2); //output = Student {} Student {}
*/
/*----- class with same property and value -----*/
/*
class Student {
    constructor() {
        this.id = 1;
        this.name = "Asima";
    }
}
const student1 = new Student();
const student2 = new Student();
console.log(student1, student2);//Student { id: 1, name: 'Asima' } Student { id: 1, name: 'Asima' }
*/
class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "School"; // common property will be automatically added in both object
    }
}
const student1 = new Student(111, "Asima");
const student2 = new Student(11, "Naima");
console.log(student1, student2); // output =Student { id: 111, name: 'Asima', school: 'School' } Student { id: 11, name: 'Naima', school: 'School' }
console.log(student1.name, student2.name);//single property access & output = Asima Naima
