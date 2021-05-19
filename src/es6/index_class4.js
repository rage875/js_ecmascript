// Classes

class Calculator {
    constructor() {
        this.a = 0;
        this.b = 0;
    }

    sum(a,b) {
        this.a = a;
        this.b = b;
        return this.a + this.b;
    }
}

const calc = new Calculator();
console.log(calc.sum(20,2))

// Modules
//import {helloFoo} from "./hello_module.js"
import helloFoo from "./hello_module.js"

helloFoo();

// Generadores

function* helloWorld() {
    if (true) {
        yield "Hello, ";
    }
    if (true) {
        yield "World";
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);