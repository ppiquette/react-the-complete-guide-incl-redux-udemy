const printMyName = (name) => {
    console.log(name)
}

printMyName('Max');


const squared = (number) => {
    return Math.pow(number, 2);
}

// concise version
const squared_short = number => Math.pow(number, 2)

console.log(squared(55))
console.log(squared_short(55))

class Person {
    constructor(){
        this.name = "Max"
    }

    printMyName() {
        console.log(this.name)
    }
}

person = new Person()
person.printMyName()