class Person {

    // the constructor function is called when we create
    // Person objects using the new keyword
    constructor(firstName, lastName, age, superPower) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age =  age;
        this.superPower = superPower || "software engineer";
        
    }

    getGreeting(){

        return `Hello, My name is ${this.getFullName()}. My super power is ${this.superPower}.`;

    }

    //method to say the Persons full name
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

}

const rohan = new Person("Rohan", "Pokwal", 155, "Fork Lift Operator");

//console.log the entire object
console.log(rohan, "entire object");

//console.log a single property
console.log(rohan.firstName, "single property");

const alec = new Person("Alec", "Philavong", 2000);

//console.log the entire object
console.log(alec, "entire object")

//console.log a single property
console.log(alec.superPower, "single property");


//call a method on the object
console.log(rohan.getFullName())
console.log(alec.getFullName())

//call a method on the object
console.log(rohan.getGreeting())
console.log(alec.getGreeting())

