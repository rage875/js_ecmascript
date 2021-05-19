const data = {
    something: "Dos",
    som : "ksdflj",
    des: "blah"
};

const entries = Object.entries(data);
console.log(entries);

console.log(Object.values(data));

// Padding

const str = "Hello";
console.log(str.padStart(7, "hi"))
console.log(str.padEnd(6, "------"))
