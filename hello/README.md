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

```ts
// type assertions allows the TS compiler to process statements of a variable in a particular type
let message; // no type declared
message = "fever"

//using type assertions
let messageR = (<string>message).endsWith('r'); 
// here type assertion is forced with angle brackets on the value of message
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
  console.log(`The value of X is ${this.x} and the value of Y is ${this.y}`);
  // using this keyword, we call the instance member of the x within the Point class
}

getDistance (another : Point) {
// ...
}
}
// here we can now have multiple functions implemented within the Point Class while re-using the values of x and y

let point = new Point()
// in the statement above point becomes an object (an object is an instance of a class)
point.x = 2;
point.y = 3;

//call the draw function within the Point Class below
point.draw();


//The output of the above declaration in javascript 
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("The value of X is " + this.x + " and the value of Y is " + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
var point = new Point();
point.x = 2;
point.y = 3;
point.draw();

```

## Constructors and Access Modifiers

```ts
// In OOP every class can utilize a constructor, this is a method that is called whenever we initialize a class

// Access Modifiers in OOP define where the members (methods, fields and properties, etc) of a class can be used or accessed 
// | public | private | protected are available access modifiers in TS

// From the Example above
// From the Example above
class Point { 
  x: number;
  y: number;

  // we initialize a constructor | in TYPESCRIT than other languages you can have multiple constructors
  // sometimes we may not know the initial value when initializing a class and will still depend on another function or object to retrieve the required data
  // by adding a question mark after the variable declaration we make it optional to declare properties when initializing the class <all this are checked within the TS compiler and not our JS code>
  constructor (x?:number, y?:number) {
    this.x = (<number>x);
    this.y = (<number>y);
    // the reason we implement this is so that the typescript compiler can enable us reduce the possibility of bugs from inputs that may contain strings, booleans, anything that's not a number etc.
  }

draw () {
  console.log(`The value of X is ${this.x} and the value of Y is ${this.y}`);
}

}

// now when we initialize the point class, we call in the parameters of x and y immediately.
let point = new Point( );

//call the draw function within the Point Class below
point.draw();

// OUTPUT IN JAVASCRIPT
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("The value of X is " + this.x + " and the value of Y is " + this.y);
    };
    return Point;
}());
var point = new Point(2, 4);
point.draw();

```

```ts
// IMPLEMENTING ACCESS MODIFIERS (PUBLIC | PRIVATE | PROTECTED?) writing cleaner classes
// The Above example can be written like this
class Point { 
  constructor (private x?:number, private y?:number) {
    // ...
  }

  draw () {
    console.log(`The value of X is ${this.x} and the value of Y is ${this.y}`);
  }

}

let point = new Point(7,9);
point.draw();

```

## Properties 
use properties when you want read only access to private fields, but want the user to be able to manipulate the values of the properties while also providing some form of validation

```js


```

```js


```

