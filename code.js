// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// code.js
function sayHello(input) {
    if (typeof input === 'undefined' || input === true || input === false) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input) {
    return Number(input) === 5;
}

// code.js
function isEven(input) {
    if (typeof input === "number") {
        return input % 2 === 0;
    }
    return false;
}


