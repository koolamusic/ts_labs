// Definining Arrays in Typescript 
// There are two syntaxes we could use to define arrays in Typescript
var strArr;
var strArr2;
// In the above example we either specify the type before the computed member brackets, this way our arrays will be an array of only numbers
strArr = ['Hello', 'Bola'];
strArr2 = ['Hello', 'Fola'];
// Other Types
var numArr;
var numArr2;
// init arrays
numArr = [1, 5, 3, 7]; // no errors
numArr2 = [8, 1, 6.4, 5];
var boolArr;
var boolArr2;
// By now I am certain you understand the concept of defining arrays in typescript
// How about cases where you need other types available in typescript ?
// The concept of Tuples allow us to define various member types within an Array 
var strNumTuple;
strNumTuple = ["Member", 1, 3, 5, 'Access', undefined];
console.log(strNumTuple);
// Here we can have an array of strings and numbers, but note that the string must precede the number in ORDER within the array.
