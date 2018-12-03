// From the Example above
class Point { 
  x: number;
  y: number;

  // we initialize a constructor 
  constructor (x:number, y:number) {
    this.x = x
    this.y = y
  }

draw () {
  console.log(`The value of X is ${this.x} and the value of Y is ${this.y}`);
}

}

// now when we initialize the point class, we call in the parameters of x and y immediately.
let point = new Point(1,4);

//call the draw function within the Point Class below
point.draw();