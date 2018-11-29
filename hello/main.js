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
    Coolor[Coolor["Red"] = 0] = "Red";
    Coolor[Coolor["Green"] = 1] = "Green";
    Coolor[Coolor["Blue"] = 2] = "Blue";
    Coolor[Coolor["Purple"] = 3] = "Purple";
})(Coolor || (Coolor = {}));
;
var backgroundColor = Coolor.Blue;
