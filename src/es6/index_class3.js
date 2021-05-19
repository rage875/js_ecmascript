// Parametros en objectos

// Old way
let first_name = "oscar";
let age = 32;

obj = {first_name: first_name, age: age};

//  es6
obj2 = {first_name, age};

console.log(obj);
console.log(obj2);

// Arrow functions

const names = [
    {first: "Luis",  age:32},
    {first: "Ed",  age:20},
]

// Old way
let listOfNames = names.map(function (item) {
    console.log(item.first)
});

// es6
let listOfNames2 = names.map(item => {
    console.log(item.first)
});

let someArrayMulParam = (a,b,c) => {};
let someArrayOneParam = a => {};
const square = num => num * num;

// Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey!");
        } else {
            reject("Ups!");
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));