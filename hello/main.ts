// From the Example above
class Point { 

  // we initialize a constructor 
  // sometimes we may not know the initial value when initializing a class and will still depend on another function or object to retrieve the required data
  // by adding a question mark after the variable declaration we make it optional to declare properties when initializing the class
  constructor (private _x?:number, private _y?:number) {
    // ...
  }

draw () {
  console.log(`The value of X is ${this._x} and the value of Y is ${this._y}`);
}

  // get is a keyword available to TS classes
  get x() {
    // this function retrieves the value of x and can be displayed to our users
    return this._x;
  }

  // use the set keyword
  set x(value) {
    if (this._x < 0)
      throw new Error("x is not a number or lower than zero")

      this._x = value;
  }

}

// now when we initialize the point class, we call in the parameters of x and y immediately.
let point = new Point(7,9);
console.log(point.x);

//call the draw function within the Point Class below
point.draw();