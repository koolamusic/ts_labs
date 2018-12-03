# Blocks

```js
function log(message) {
  console.log(message);
}

// call message
let message = "Hello World";
log(message);

```


```js

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
enum Coolor {Red, Green, Blue};
let backgroundColor = Coolor.Blue;

```



```js
// namespaced enums
enum Coolor {RED = 'red', GREEN = 'green', BLUE = 'blue', PURPLE = 'purple'};
let backgroundColor = Coolor.BLUE;

// js output
var Coolor;
(function (Coolor) {
    Coolor["RED"] = "red";
    Coolor["GREEN"] = "green";
    Coolor["BLUE"] = "blue";
    Coolor["PURPLE"] = "purple";
})(Coolor || (Coolor = {}));
;
var backgroundColor = Coolor.BLUE;

```

## Type Assertions

```js
// type assertions allows the TS compiler to process statements of a variable in a particular type
let message; // no type declared
message = "fever"

//using type assertions
let messageR = (<string>message).endsWith('r') // here type assertion is forced with angle brackets on the value of message
let secondMessageR = (message as string).endsWith('r')
// the first example is the most common method used.

```

## Custom Types

```js
// using custom types with interfaces and functions in OOP to define the shape and type of an object. NB interfaces are clearly 
// meant for declarations and not implementations

interface Point {
	x: number,
	y: number
  }

// call a function drawPoint to use the parameter of the object in the Point interface as props of the function
let drawPoint = (point: Point) {
	// ...
  }


```

## Classes
```js
// in OOP functions within a class are called methods || Lets take the interface and function in the example above and apply
// the cohesion principle (This would require us to transform our interface to a class) ...More on the cohesion principle. 

class Point { 
        x: number;
        y: number;

	draw () {
	  //...
	}

	getDistance () {
	  // ...
	}
  }

// here we can now have multiple functions implemented within the Point Class while re-using the values of x and y

```

```js


```

```js


```

```js


```
