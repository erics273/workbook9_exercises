"use strict"

class Person {

    constructor(firstName, lastName){

        this.firstName = firstName;
        this.lastName = lastName;

    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }


}

const somePerson = new Person("Debarkis", "Johnson");
console.log(`The person's name is ${somePerson.getFullName()}`);

class Employee extends Person {

    constructor(firstName, lastName, id, jobTitle, payRate){

        super(firstName, lastName);
        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;

    }

    getGrossPay(hoursWorked){
        return (hoursWorked * this.payRate).toFixed(2);
    }

}

let employee1 = new Employee("Lesly", "Lopez", 88, "Tech", 40);
let employee2 = new Employee("Frank", "Mont", 2, "forklift operator", 23.25);

console.log(`${employee1.getFullName()} and ${employee2.getFullName()} both love their jobs!`);

let employee3 = new Employee("Bobby", "Pop", 10, "the math guy", 12.50);
let employee4 = new Employee("Isaac", "Philavong", 3, "Fry Cook", 10.00);

console.log(`${employee3.getFullName()} made ${employee3.getGrossPay(10)} this week`);
console.log(`${employee4.getFullName()} made ${employee4.getGrossPay(60)} this week`);