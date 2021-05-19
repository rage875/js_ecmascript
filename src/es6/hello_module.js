/*export here should be used with
 import helloFoo from "./hello_module.js"*/ 
const helloFoo = () => {
    console.log("Hello World from a module!")
}

export default helloFoo;
// Should be use it with
// import helloFoo from "./hello_module.js"