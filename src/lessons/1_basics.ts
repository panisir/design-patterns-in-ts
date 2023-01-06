function add(n1: number, n2: number, showResult: boolean, resultPhares: string) {
    const result = n1 + n2;
    if(showResult){
        console.log(resultPhares + result);
    }
    return result;
}

const number1 = 5;
const number2= 2.8;

const result = add(number1, number2, true, 'The result is : ');

console.log(result);

const person : {
    name: string,
    age: number
} = {
    name : 'Melih',
    age: 31
};

// INTERFACES
interface note {
    lecture: string,
    point: number
}


// ENUMS
enum Role {
    ADMIN= 0,
    READ_ONLY_USER = 1
}

let student : {
    name: string,
    lastName: string,
    studentıd: number,
    notes: note[],
    hobbies: [number, string, number, boolean], // TUPLES TYPES,
    role: number
} = {
    name: '',
    lastName: '',
    studentıd: 0,
    notes: new Array(),
    hobbies: [1, '', 2, true],
    role: Role.READ_ONLY_USER
};

student.name = 'Melih'
student.lastName = 'Korkmaz'
student.studentıd = 2010010506054;
student.notes.push({
    lecture : 'Math',
    point: 78
});

console.log('STUDENT INFO : ' + JSON.stringify(student));


// UNION TYPES
function combine(input1: number | string, input2: number | string){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }else {
        result = input1.toString() + input2.toString()
    }
    return result;
};
 
const combinedAges = combine(30, 26);
const combinedNames = combine('Max', 'Anna');

console.log('COMBINED AGES  : ', combinedAges);
console.log('COMBINED NAMES : ', combinedNames);


// LITERAL TYPES
function combine_literal(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text'){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }else {
        result = input1.toString() + input2.toString()
    }
    return result;
};
 
const combinedAges2 = combine_literal(30, 26, 'as-number');
const combinedNames2 = combine_literal('Max', 'Anna', 'as-number');

console.log('COMBINED AGES  LITERAL: ', combinedAges);
console.log('COMBINED NAMES LITERAL: ', combinedNames);

// TYPE ALIASES - CUSTOM TYPES

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine_aliases(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }else {
        result = input1.toString() + ' ' + input2.toString()
    }
    return result;
};
 
const combinedAges3 = combine_aliases(30, 26, 'as-number');
const combinedNames3 = combine_aliases('Max', 'Anna', 'as-number');

console.log('COMBINED AGES  ALIASES: ', combinedAges);
console.log('COMBINED NAMES ALIASES: ', combinedNames);


// RETURN TYPES
function add_return(n1: number, n2: number) : number {
    return n1 + n2;
}

function printResult(num: number) : void {
    console.log('Result : ' + num);
}

console.log(printResult(5)); // this logs undefined


// FUCTIONS AS TYPES

function fn1(n1: number, n2: number) : number {
    return n1 + n2;
}

let combineValues : (p1: number, p2: number) => number;

combineValues = fn1;

console.log('Combine Values with function types : ' + combineValues(1,2));


// CALLBACKS

function addAndHandle(n1: number, n2: number, cbb: (num: number) => void) {
    const result = n1 + n2;
    cbb(result);
}

addAndHandle(10, 20, (rsuuuu) => {
    // return result;
    console.log('CALLBACKS : ' + rsuuuu);
});


function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    console.log(data);
    return cb({data: 'Hi there!'});
  }
   
  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });


// UNKNOWN TYPE

let userInput : unknown;
let userNamee: string;

userInput = 5;
// gives error if the userInput is type of unknown
// But if we change this to any the error disappears
// userNamee = userInput;


// NEVER TYPE

// Rest parameters

const addRestParameters = (...numbers : number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 3);
}

const addRestParametersLimited = (...numbers : [number, number, number]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 3);
}

console.log(addRestParameters(0,1,2,3,4,5));
console.log(addRestParametersLimited(0,1,2));



