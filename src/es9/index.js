// Operador de reposo
// Para extraer solo las propiedades de un objecto que necesitemos

const data = {
    something: "Dos",
    som : "ksdflj",
    des: "blah"
};

let {som, ...all} = data;
console.log(som, all);

//Propiedades de propagacion

const objInner = {
    inner: "Inner"
}

const objInnerOutter = {
    ... objInner,
    outter : "Outter",
}

console.log(objInnerOutter)


// Promise finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World Promise"), 3000)
            : reject(new Error("Hello world Promise Error!!"))
    });
}

helloWorld()
    .then(reponse => console.log(reponse))
    .catch(error => console.log(error))
    .finally(() => console.log("Hello world promise finalizo!"))

// Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);