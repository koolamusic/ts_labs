// in OOP functions within a class are called methods || Lets take the interface and function in the example above and apply
// the cohesion principle (This would require us to transform our interface to a class) ...More on the cohesion principle. 
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("The value of X is " + this.x + " and the value of Y is " + this.y);
        // using this keyword, we call the instance member of the x within the Point class
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
// here we can now have multiple functions implemented within the Point Class while re-using the values of x and y
var point = new Point();
// in the statement above point becomes an object (an object is an instance of a class)
point.x = 2;
point.y = 3;
//call the draw function within the Point Class below
point.draw();
