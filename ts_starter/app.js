"use strict";
//create an Interface called schInfo for School Info 
var stuArray;
var learnArray;
stuArray = [
    {
        fname: 'Chinedu',
        lname: 'Amos',
        age: 23,
        lang: 'English',
        class: 'JSS2'
    },
    {
        fname: 'Umahi',
        lname: 'Chinyere',
        age: 25,
        lang: 'French',
        class: 'SS1'
    },
    {
        fname: 'Kola',
        lname: 'Bobola',
        age: 26,
        lang: 'German',
        class: 'SS3'
    }
];
learnArray = [
    {
        fname: 'Moriah',
        lname: 'Abati',
        age: 23,
        lang: 'English',
        class: 'JSS2'
    },
    {
        fname: 'Kunle',
        lname: 'Katie',
        age: 25,
        lang: 'French',
        class: 'SS1'
    },
    {
        fname: 'Jorowe',
        lname: 'Numa',
        age: 26,
        lang: 'German',
        class: 'SS3'
    }
];
// console.log(stuArray[1]);
// stuArray.forEach(element => {
//   console.log(element)
// });
// Function (Parameter with types)
function getAge(array) {
    array.forEach(function (element) {
        console.log(element.fname + " has an age of " + element.age);
    });
}
// getAge(stuArray);
// Function (REST Parameters)
// This type of function can take in multiple number of values as long as they belong to the parameter : type defined in the function
function userReg() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    arrays.forEach(function (element) {
        // define the type of id in brackets and assign it to the interface schInfo
        element.forEach(function (id) {
            console.log(id.fname + " has been registered into the Community");
        });
    });
}
userReg(stuArray);
// Function (Default Parameter Concept)
function areYouTheOne(answer) {
    if (answer === void 0) { answer = true; }
    if (!answer)
        console.log("You broke my heart");
    else
        console.log("I love you");
}
areYouTheOne(false);
//# sourceMappingURL=app.js.map