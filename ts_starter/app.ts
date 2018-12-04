console.log("Hello ExecuteAutomation");
import { Point } from "../hello/point";

let point = new Point(4,5);
// let point.x = 3;
point.draw();
point.x = 4;

console.log(point.x)
