// From the Example above
var Point = /** @class */ (function () {
    // we initialize a constructor 
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("The value of X is " + this.x + " and the value of Y is " + this.y);
    };
    return Point;
}());
// now when we initialize the point class, we call in the parameters of x and y immediately.
var point = new Point(1, 4);
//call the draw function within the Point Class below
point.draw();
