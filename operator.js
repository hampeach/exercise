// 자바스크립트4. 코딩의 기본 operator, if, for loop 코드리뷰 팁 | 프론트엔드 개발자 입문편 (JavaScript ES6)

// 1. STring concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log(`string literals:                  


....

1 + 2 = literals: 1 + 2 ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; 
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


//4. Assignment operators
let x = 3;
let y = 6;

x += y ;
x -= y;
x *= y;
x /= y;


// 5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. logical operators: || (or), && (and) , ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), find the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), find the first truthy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
//if (nullableObject != null){
//    nullableObject.something;
//}

function check() {
    for (let i =0; i < 10; i++) {
        //wasting time
        console.log('***lol***');
    }
    return true;
}


// ! (not)


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);



// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


// object equality by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);


//equality - puzzler
console.log('equality - puzzler');
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);


// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'ellie')
{
    console.log('Welcome, Ellie!');
} else if(name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwon');
}


// 9. Ternary operator: ?
// condition ? value : value2;

console.log(name === 'ellie' ? 'yes' : 'no');


// 10. switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type check in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'FireFox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;

}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i =3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0)

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
for (let i =3; i > 0; i = i-2) {
    console.log(`for: ${i}`);
}

// nested loops
//bigO , 성능저하?
for (let i=0; i <10; i++){
    for (let j=0; j< 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

//break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
// even numbers == 짝수;
let n = 11;
do {    
      n--;
    if (n % 2 === 0) {
        continue;
    } 
    console.log(`q11: ${n}`);
    
} while(n > 0)

//solved
for (let i=0; i<11; i++){
    if (i%2 ===0){
        continue;
    }
    console.log(`q1: ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 10; i > 0; i--){
    
    console.log(`q2: ${i}`);
    if (i == 8) break;
}