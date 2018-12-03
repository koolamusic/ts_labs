// the concept of modularity in typescript
export class Point { 

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
    if (value < 0)
      throw new Error("x is not a number or lower than zero")

      this._x = value;
  }

}