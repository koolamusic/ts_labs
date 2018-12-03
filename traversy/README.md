## Developing with Typescript
- After installing the typescript compiler, you can run the program in watch mode on the root dir of your project using `tsc 
FILE_NAME.ts -w` the argument **-w** means watch mode type `tsc --help` for more commands

- run `tsc --init` to generate a Typescript configuration file, this allows you to set instructions for the transpile process of the TypeScript Compiler. 


#### Defining Arrays
```ts
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
```

#### Tuples
```ts

// How about cases where you need other types available in typescript ?
// The concept of Tuples allow us to define various member types within an Array 

let strNumTuple : [string, number];
strNumTuple = ["Member", 1, 3, 5, 'Access']
console.log(strNumTuple)

// Here we can have an array of strings and numbers, but note that the string must precede the number in ORDER within the array.
```
