"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// the concept of modularity in typescript
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
            if (value < 0)
                throw new Error("x is not a number or lower than zero");
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
//# sourceMappingURL=point.js.map