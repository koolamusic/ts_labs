// import the point.ts module
import { Point } from "./point";

// now when we initialize the point class, we call in the parameters of x and y immediately.
let point = new Point(7,9);
let x = point.x;
console.log(`X is now ${x}`);

point.x = 21;
//call the draw function within the Point Class below
point.draw();