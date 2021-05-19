// es6 - Template literals
console.log(`${hello} ${world}`);

// Multilinea

// Old way
let lorem = "Frase \n"
+ "en otra linea";

// es6
let lorem2 = `Otra frase
en otra linea otra vez`;

console.log(lorem);
console.log(lorem2);


// Desestructuracion de elementos
let person = {
    "name" : "Luis",
    "age" : 30
};

console.log(person.name)

let {name, age} = person;
console.log(age)

// Operador de propagacion (Spread Operator)
let team = ["Oscar", "Jul"]
let team_other = ["Le", "Pu"]

let education = ["David", ...team, ...team_other]
console.log(education)

// Diferencia entre var y let
{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet); // Will throw an error becuase is not accesible in this scope