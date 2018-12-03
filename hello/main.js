// From the Example above
var Point = /** @class */ (function () {
    // we initialize a constructor 
    // sometimes we may not know the initial value when initializing a class and will still depend on another function or object to retrieve the required data
    // by adding a question mark after the variable declaration we make it optional to declare properties when initializing the class
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // the reason we implement this is so that the typescript compiler can enable us reduce the possibility of bugs from inputs that may contain strings, booleans, anything that's not a number etc.
    }
    Point.prototype.draw = function () {
        console.log("The value of X is " + this.x + " and the value of Y is " + this.y);
    };
    return Point;
}());
// now when we initialize the point class, we call in the parameters of x and y immediately.
var point = new Point(2, 4);
//call the draw function within the Point Class below
point.draw();
