// Flat

let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2))

// Flat map

let array2 = [1,2,3,4,5]
console.log(array2.flatMap(value => [value, value * 2 ]));


// Trim Start and Trim End
let helloBegin = "           hello world";
let helloEnd = "hello world           ";

console.log(helloBegin);
console.log(helloBegin.trimStart());
console.log(helloEnd, "x");
console.log(helloEnd.trimEnd(), "x");