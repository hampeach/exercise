// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body ... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('hello');
log(1234);

// 2. parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie' };
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('hi~!');


//4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i=0; i< args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');


//5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);

    function prinAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage);
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}

const result = sum(1,2); //3
console.log(result);


//7. Early return, early exit
//bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade loigc...
    }
}

//good
function updradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a funciton expression is created when the execution reaches it.
const print = function () { 
    //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
    //print(); //recursions , 프로그램죽음, 피보나치수열 or 반복 평균값 등 사용에 적용. //Maximum call stack size exceeded
}
randomQuiz('worng', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
}
const simplePrint2 = () => console.log('simplePrint2!');
const add = (a, b) => a + b; //simple function
const simpleMultiply = (a,b) => {
    //do something more
    return a*b;
}

//IIFE: Immediately Invoked Function Expression
//함수실행 즉시사용
(function hello() {
    console.log('IIFE');
})();


// Fun Quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

//solved start.jhm.
const calculate = (command, a, b) => {
    switch (command) {
        case 'add':
            console.log(`${command} : ${a + b}`);
            break;
        case 'substract':
            console.log(`${command} : ${a - b}`);
            break;
        case 'divide':
            console.log(`${command} : ${a / b}`);
            break;
        case 'multiply':
            console.log(`${command} : ${a * b}`);
            break;
        case 'remainder':
            console.log(`${command} : ${a % b}`);
            break;
        default:
            console.log(`command type error: ${command}`);
            break;
    }
}
calculate('add', 1, 2); //3
calculate('substract', 2, 1); //1
calculate('divide', 4, 2); //2
calculate('multiply', 2, 2); // 4
calculate('remainder', 6, 4); // 2
calculate('default', 1, 2); // error

// ellie solved.
function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a+b;
        case 'substract':
            return a-b;
        case 'divide':
            return a/b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a%b;
        default:
            throw Error('unkwon error');
    }
}
console.log(calculate('add', 1, 2)); //3