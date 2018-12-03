// Definining Arrays in Typescript 

// There are two syntaxes we could use to define arrays in Typescript

let strArr : string[];
let strArr2 : Array<string>;
// In the above example we either specify the type before the computed member brackets, this way our arrays will be an array of only numbers

strArr = ['Hello', 'Bola'];
strArr2 = ['Hello', 'Fola'];


// Other Types

let numArr : number[];
let numArr2 : Array<number>;
// init arrays
numArr = [1,5,3,7]; // no errors
numArr2 = [8,1,6.4,5];

let boolArr : boolean[];
let boolArr2: Array<boolean>;

// By now I am certain you understand the concept of defining arrays in typescript


// How about cases where you need other types available in typescript ?
