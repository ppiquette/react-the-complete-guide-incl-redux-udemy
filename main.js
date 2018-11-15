
// Regular javascript function
function regularFunction(){
    console.log("regular javascript function")
}
regularFunction()


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NextGen Javascript functionality

//
// let and const
//

// Standard Javascript variable
var regular_javascript_variable = 67;

// New syntax but like var
let same_as_var = 67;

// as it names suggested, constant
const could_not_be_changed = 67;

//
// Arrow function
//
const printMyName = (name) => {
    console.log(name)
};
printMyName('Max');

// With a return value
const squared = (number) => {
    return Math.pow(number, 2);
};
console.log(squared(could_not_be_changed));

// concise version
// if one parameter -> no () required
// just return something -> no return keyword required
const squared_short = number => Math.pow(number, 2);
console.log(squared_short(same_as_var));


//
// Classes
//

// very similar to javascript function instantiation (whatever it is)

class Human {
    // required
    constructor(){
        this.sex = "M"
    }

}

class Person extends Human {
    constructor(){
        // need to call constructor of parent like in Python
        super();
        this.name = "BillyBob"
    }

    printStuff() {
        console.log(this.name)
        console.log(this.sex)
    }
}


// Instantiation of a class
let somebody = new Person();
somebody.printStuff();


//
// export and import
//

// Need to compile the code with Babel first. You can run the compiler in command line, or make transpiling
// a part of your build process (using Gulp, Grunt, WebPack, etc.).
// In WebStorm: https://blog.jetbrains.com/webstorm/2015/05/ecmascript-6-in-webstorm-transpiling/

import any_name from "./defaultexport.js";
any_name();

import {myConstant} from "./export_items_individually";
import {myFunction} from "./export_items_individually";
myFunction(myConstant);
