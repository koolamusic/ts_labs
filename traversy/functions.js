// Functions in typescript can also utilize classes 
function getSum(num1, num2) {
    return num1 + num2;
}
// here we write a function whose arguments can only be numbers, and the return value of the function can only be a number
// Another Example 
var getName = function (fname, lname) {
    if (fname == undefined && lname == undefined)
        return "No name defined";
    return fname + " " + lname;
};
console.log(getName());
