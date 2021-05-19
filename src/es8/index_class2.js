// Async

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve("Hello World Promise"), 3000)
            : reject(new Error("Hello world Promise Error!!"))
    });
}

const helloAsync  = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

const anotherFooAsync = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error)
    }
}

//helloAsync()
anotherFooAsync()