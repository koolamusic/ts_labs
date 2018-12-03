// From the Example above
var Point = /** @class */ (function () {
    // we initialize a constructor 
    // sometimes we may not know the initial value when initializing a class and will still depend on another function or object to retrieve the required data
    // by adding a question mark after the variable declaration we make it optional to declare properties when initializing the class
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // ...
    }
    Point.prototype.draw = function () {
        console.log("The value of X is " + this._x + " and the value of Y is " + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        // get is a keyword available to TS classes
        get: function () {
            // this function retrieves the value of x and can be displayed to our users
            return this._x;
        },
        // use the set keyword
        set: function (value) {
            if (this._x < 0)
                throw new Error("x is not a number or lower than zero");
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
// now when we initialize the point class, we call in the parameters of x and y immediately.
var point = new Point(7, 9);
console.log(point.x);
//call the draw function within the Point Class below
point.draw();
