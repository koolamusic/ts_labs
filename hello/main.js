"use strict";
exports.__esModule = true;
// import the point.ts module
var point_1 = require("./point");
// now when we initialize the point class, we call in the parameters of x and y immediately.
var point = new point_1.Point(7, 9);
var x = point.x;
console.log("X is now " + x);
point.x = 21;
//call the draw function within the Point Class below
point.draw();
