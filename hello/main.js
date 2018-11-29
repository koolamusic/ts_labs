// types in ts
var a;
var b;
var c;
var d;
var e = [1, 2, 3]; //only array of numbers
var f = [1, true, 'a', false];
// working with enums types in TS
// instead of declaring multiple related variables 
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// using enum
var Coolor;
(function (Coolor) {
    Coolor["RED"] = "red";
    Coolor["GREEN"] = "green";
    Coolor["BLUE"] = "blue";
    Coolor["PURPLE"] = "purple";
})(Coolor || (Coolor = {}));
;
var backgroundColor = Coolor.BLUE;
