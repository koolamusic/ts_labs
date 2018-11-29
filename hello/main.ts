// types in ts
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3]; //only array of numbers
let f: any[] = [1, true, 'a', false]; 


// working with enums types in TS
// instead of declaring multiple related variables 
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// using enum
enum Coolor {Red = 0, Green = 1, Blue = 2, Purple = 3};
let backgroundColor = Coolor.Blue;
