"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello ExecuteAutomation");
var point_1 = require("../hello/point");
var point = new point_1.Point(4, 5);
// let point.x = 3;
point.draw();
point.x = 4;
console.log(point.x);
//# sourceMappingURL=app.js.map