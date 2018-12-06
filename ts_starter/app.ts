import { schInfo } from "./module";

let stuArray : schInfo[];
let learnArray : schInfo[];



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

function getAge(array : any[]) {
  array.forEach(element => {
    console.log(`${element.fname} has an age of ${element.age}`);
  })
}

// getAge(stuArray);


// Function (REST Parameters)
// This type of function can take in multiple number of values as long as they belong to the parameter : type defined in the function

function userReg(...arrays: any[]) {
  arrays.forEach(element => {
    // define the type of id in brackets and assign it to the interface schInfo
    element.forEach((id : schInfo)=> {
      console.log(`${id.fname} has been registered into the Community`);
    });
  })
}

userReg(stuArray);


// Function (Default Parameter Concept)
function areYouTheOne (answer: boolean = true) {
  if (!answer)
  console.log("You broke my heart");
  else
  console.log("I love you");
}

areYouTheOne(false);